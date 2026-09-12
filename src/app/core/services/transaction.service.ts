import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of, timer } from 'rxjs';
import { map, catchError, shareReplay, tap, retry, delayWhen, retryWhen } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { PerformanceService } from './performance.service';
import { environment } from '../../../environments/environment';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  category: string;
  merchantName: string;
  merchantCategory: string;
  accountId: string;
  reference: string;
  metadata?: Record<string, any>;
}

export interface TransactionFilter {
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  status?: string[];
  category?: string[];
  merchantName?: string;
  accountId?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface TransactionSummary {
  totalTransactions: number;
  totalAmount: number;
  averageAmount: number;
  pendingCount: number;
  completedCount: number;
  failedCount: number;
  byCategory: Record<string, { count: number; total: number }>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly http = inject(HttpClient);
  private readonly cacheService = inject(CacheService);
  private readonly performanceService = inject(PerformanceService);

  private readonly apiUrl = `${environment.apiUrl}/transactions`;
  private readonly cacheKey = 'transactions';
  private readonly cacheTTL = 5 * 60 * 1000;

  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  readonly transactions$ = this.transactionsSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();
  readonly error$ = this.errorSubject.asObservable();

  getTransactions(filter: TransactionFilter = {}): Observable<Transaction[]> {
    const cacheKey = this.buildCacheKey('list', filter);
    const cached = this.cacheService.get<Transaction[]>(cacheKey);

    if (cached) {
      this.transactionsSubject.next(cached);
      return of(cached);
    }

    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    const params = this.buildQueryParams(filter);
    const headers = this.buildHeaders();

    const markId = this.performanceService.mark('transaction-list-start');

    return this.http.get<PaginatedResponse<Transaction>>(this.apiUrl, { params, headers }).pipe(
      map(response => response.data),
      tap(transactions => {
        this.cacheService.set(cacheKey, transactions, this.cacheTTL);
        this.transactionsSubject.next(transactions);
        this.loadingSubject.next(false);
        this.performanceService.mark('transaction-list-end');
        this.performanceService.measure('transaction-list', 'transaction-list-start', 'transaction-list-end');
      }),
      retry({
        count: 3,
        delay: (error, retryCount) => {
          console.warn(`Retry ${retryCount} for transaction list after error:`, error);
          return timer(retryCount * 1000);
        }
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        const errorMessage = this.extractErrorMessage(error);
        this.errorSubject.next(errorMessage);
        return throwError(() => new Error(errorMessage));
      }),
      shareReplay(1)
    );
  }

  getTransactionById(id: string): Observable<Transaction> {
    const cacheKey = `transaction-${id}`;
    const cached = this.cacheService.get<Transaction>(cacheKey);

    if (cached) {
      return of(cached);
    }

    this.loadingSubject.next(true);

    const headers = this.buildHeaders();
    const markId = this.performanceService.mark('transaction-detail-start');

    return this.http.get<Transaction>(`${this.apiUrl}/${id}`, { headers }).pipe(
      map(transaction => {
        this.cacheService.set(cacheKey, transaction, this.cacheTTL);
        this.performanceService.mark('transaction-detail-end');
        this.performanceService.measure('transaction-detail', 'transaction-detail-start', 'transaction-detail-end');
        return transaction;
      }),
      tap(() => this.loadingSubject.next(false)),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      }),
      shareReplay(1)
    );
  }

  getTransactionSummary(filter: TransactionFilter = {}): Observable<TransactionSummary> {
    const cacheKey = this.buildCacheKey('summary', filter);
    const cached = this.cacheService.get<TransactionSummary>(cacheKey);

    if (cached) {
      return of(cached);
    }

    const params = this.buildQueryParams(filter);
    const headers = this.buildHeaders();

    return this.http.get<TransactionSummary>(`${this.apiUrl}/summary`, { params, headers }).pipe(
      map(summary => {
        this.cacheService.set(cacheKey, summary, this.cacheTTL);
        return summary;
      }),
      catchError(error => {
        return throwError(() => new Error(this.extractErrorMessage(error)));
      }),
      shareReplay(1)
    );
  }

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction> {
    this.loadingSubject.next(true);

    const headers = this.buildHeaders();

    return this.http.post<Transaction>(this.apiUrl, transaction, { headers }).pipe(
      tap(created => {
        this.cacheService.invalidate(this.cacheKey);
        const current = this.transactionsSubject.getValue();
        this.transactionsSubject.next([created, ...current]);
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  updateTransaction(id: string, updates: Partial<Transaction>): Observable<Transaction> {
    this.loadingSubject.next(true);

    const headers = this.buildHeaders();

    return this.http.patch<Transaction>(`${this.apiUrl}/${id}`, updates, { headers }).pipe(
      tap(updated => {
        this.cacheService.invalidate(this.cacheKey);
        this.cacheService.invalidate(`transaction-${id}`);
        const current = this.transactionsSubject.getValue();
        const index = current.findIndex(t => t.id === id);
        if (index >= 0) {
          const updatedList = [...current];
          updatedList[index] = updated;
          this.transactionsSubject.next(updatedList);
        }
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  deleteTransaction(id: string): Observable<void> {
    this.loadingSubject.next(true);

    const headers = this.buildHeaders();

    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }).pipe(
      tap(() => {
        this.cacheService.invalidate(this.cacheKey);
        this.cacheService.invalidate(`transaction-${id}`);
        const current = this.transactionsSubject.getValue();
        this.transactionsSubject.next(current.filter(t => t.id !== id));
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  exportTransactions(format: 'csv' | 'json' | 'pdf', filter: TransactionFilter = {}): Observable<Blob> {
    const params = this.buildQueryParams(filter).set('format', format);
    const headers = this.buildHeaders();

    return this.http.get(`${this.apiUrl}/export`, {
      params,
      headers,
      responseType: 'blob'
    }).pipe(
      catchError(error => {
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  clearCache(): void {
    this.cacheService.invalidate(this.cacheKey);
    this.transactionsSubject.next([]);
  }

  private buildQueryParams(filter: TransactionFilter): HttpParams {
    let params = new HttpParams();

    if (filter.startDate) params = params.set('startDate', filter.startDate);
    if (filter.endDate) params = params.set('endDate', filter.endDate);
    if (filter.minAmount !== undefined) params = params.set('minAmount', filter.minAmount.toString());
    if (filter.maxAmount !== undefined) params = params.set('maxAmount', filter.maxAmount.toString());
    if (filter.status?.length) params = params.set('status', filter.status.join(','));
    if (filter.category?.length) params = params.set('category', filter.category.join(','));
    if (filter.merchantName) params = params.set('merchantName', filter.merchantName);
    if (filter.accountId) params = params.set('accountId', filter.accountId);
    if (filter.page !== undefined) params = params.set('page', filter.page.toString());
    if (filter.pageSize !== undefined) params = params.set('pageSize', filter.pageSize.toString());
    if (filter.sortBy) params = params.set('sortBy', filter.sortBy);
    if (filter.sortOrder) params = params.set('sortOrder', filter.sortOrder);

    return params;
  }

  private buildHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Request-ID': this.generateRequestId()
    });
  }

  private buildCacheKey(prefix: string, filter: TransactionFilter): string {
    return `${this.cacheKey}-${prefix}-${JSON.stringify(filter)}`;
  }

  private generateRequestId(): string {
    return `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private extractErrorMessage(error: any): string {
    if (error.error?.message) return error.error.message;
    if (error.message) return error.message;
    return 'Error desconocido al procesar la solicitud';
  }
}
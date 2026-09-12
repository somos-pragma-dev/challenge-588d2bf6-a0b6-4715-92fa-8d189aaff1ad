import { 
  Component, 
  OnInit, 
  OnDestroy, 
  ChangeDetectionStrategy, 
  ChangeDetectorRef,
  Signal,
  computed,
  signal,
  effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { filter, takeUntil, debounceTime, distinctUntilChanged, tap, map, catchError, finalize } from 'rxjs/operators';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TransactionService } from '@core/services/transaction.service';
import { Transaction, TransactionFilter, TransactionSummary, PaginatedResponse } from '@core/models/transaction.model';
import { LoadingState } from '@core/models/loading-state.model';
import { PerformanceService } from '@core/services/performance.service';
import { CacheService } from '@core/services/cache.service';

interface TransactionViewModel {
  transactions: Transaction[];
  summary: TransactionSummary | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  filters: TransactionFilter;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly performanceService: PerformanceService;
  private readonly cacheService: CacheService;
  
  readonly viewModel = signal<TransactionViewModel>({
    transactions: [],
    summary: null,
    loading: false,
    error: null,
    currentPage: 0,
    pageSize: 25,
    totalItems: 0,
    filters: this.getDefaultFilters()
  });

  readonly isLoading$: Observable<boolean>;
  readonly error$: Observable<string | null>;
  readonly transactions$: Observable<Transaction[]>;
  readonly summary$: Observable<TransactionSummary | null>;

  readonly hasTransactions = computed(() => this.viewModel().transactions.length > 0);
  readonly hasError = computed(() => this.viewModel().error !== null);
  readonly transactionCount = computed(() => this.viewModel().transactions.length);
  readonly totalAmount = computed(() => {
    const summary = this.viewModel().summary;
    return summary?.totalAmount || 0;
  });

  private readonly transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly errorSubject = new BehaviorSubject<string | null>(null);
  private readonly summarySubject = new BehaviorSubject<TransactionSummary | null>(null);
  private readonly pageSubject = new BehaviorSubject<{ page: number; size: number }>({ page: 0, size: 25 });

  readonly activeTab = signal<number>(0);
  readonly sidebarOpen = signal<boolean>(true);
  readonly lastSyncTime = signal<Date | null>(null);

  constructor(
    private readonly transactionService: TransactionService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly snackBar: MatSnackBar
  ) {
    this.performanceService = new PerformanceService();
    this.cacheService = new CacheService();
    
    this.isLoading$ = this.loadingSubject.asObservable();
    this.error$ = this.errorSubject.asObservable();
    this.transactions$ = this.transactionsSubject.asObservable();
    this.summary$ = this.summarySubject.asObservable();

    effect(() => {
      const vm = this.viewModel();
      if (vm.loading) {
        this.performanceService.mark('transactions-loading-start');
      } else if (vm.transactions.length > 0) {
        this.performanceService.mark('transactions-loading-end');
        const duration = this.performanceService.measure('transactions-loading-start', 'transactions-loading-end');
        this.performanceService.logMetric('transactions_load_time', duration);
      }
    });
  }

  ngOnInit(): void {
    this.setupRouteTracking();
    this.loadInitialData();
    this.setupFilterSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.cacheService.clearPattern('transactions_*');
  }

  private setupRouteTracking(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  private loadInitialData(): void {
    this.setLoading(true);
    const filters = this.viewModel().filters;
    const { page, size } = this.pageSubject.value;

    combineLatest([
      this.transactionService.getTransactions({ ...filters, page, size }),
      this.transactionService.getTransactionSummary(filters)
    ]).pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      catchError(error => {
        this.handleError(error);
        return [];
      })
    ).subscribe(([transactionsResponse, summary]) => {
      this.handleTransactionsResponse(transactionsResponse);
      this.summarySubject.next(summary);
      this.setLoading(false);
      this.lastSyncTime.set(new Date());
      this.cdr.markForCheck();
    });
  }

  private setupFilterSubscription(): void {
    this.pageSubject.pipe(
      takeUntil(this.destroy$),
      debounceTime(200),
      distinctUntilChanged((prev, curr) => prev.page === curr.page && prev.size === curr.size)
    ).subscribe(({ page, size }) => {
      this.loadTransactions({ page, size });
    });
  }

  loadTransactions(params?: { page?: number; size?: number }): void {
    const currentPage = params?.page ?? this.pageSubject.value.page;
    const pageSize = params?.size ?? this.pageSubject.value.pageSize;
    
    this.pageSubject.next({ page: currentPage, size: pageSize });
    this.setLoading(true);

    this.transactionService.getTransactions({
      ...this.viewModel().filters,
      page: currentPage,
      size: pageSize
    }).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.handleError(error);
        return [];
      }),
      finalize(() => {
        this.setLoading(false);
        this.cdr.markForCheck();
      })
    ).subscribe(response => {
      this.handleTransactionsResponse(response);
    });
  }

  onPageChange(page: number, pageSize: number): void {
    this.loadTransactions({ page, size: pageSize });
  }

  onFilterChange(filters: TransactionFilter): void {
    this.updateViewModel('filters', filters);
    this.loadTransactions({ page: 0, size: this.pageSubject.value.size });
  }

  onTransactionSelect(transaction: Transaction): void {
    this.router.navigate(['/transactions/detail', transaction.id]);
  }

  onTransactionDelete(transaction: Transaction): void {
    if (confirm(`¿Está seguro de eliminar la transacción ${transaction.id}?`)) {
      this.setLoading(true);
      this.transactionService.deleteTransaction(transaction.id).pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          this.handleError(error);
          return [];
        }),
        finalize(() => {
          this.setLoading(false);
          this.cdr.markForCheck();
        })
      ).subscribe(() => {
        this.showNotification('Transacción eliminada correctamente', 'success');
        this.loadTransactions();
      });
    }
  }

  refreshData(): void {
    this.cacheService.clearPattern('transactions_*');
    this.loadTransactions();
    this.showNotification('Datos actualizados', 'info');
  }

  exportTransactions(format: 'csv' | 'json' | 'pdf'): void {
    this.setLoading(true);
    this.transactionService.exportTransactions(format, this.viewModel().filters).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.handleError(error);
        return [];
      }),
      finalize(() => {
        this.setLoading(false);
        this.cdr.markForCheck();
      })
    ).subscribe(() => {
      this.showNotification(`Exportación en formato ${format.toUpperCase()} iniciada`, 'success');
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  setActiveTab(index: number): void {
    this.activeTab.set(index);
  }

  private handleTransactionsResponse(response: PaginatedResponse<Transaction>): void {
    this.transactionsSubject.next(response.data || []);
    this.updateViewModel({
      transactions: response.data || [],
      totalItems: response.total || 0,
      currentPage: response.page || 0,
      pageSize: response.size || 25
    });
  }

  private handleError(error: any): void {
    const errorMessage = this.extractErrorMessage(error);
    this.errorSubject.next(errorMessage);
    this.updateViewModel('error', errorMessage);
    this.showNotification(errorMessage, 'error');
  }

  private extractErrorMessage(error: any): string {
    if (error?.status === 401) {
      return 'Sesión expirada. Por favor, inicie sesión nuevamente.';
    }
    if (error?.status === 403) {
      return 'No tiene permisos para realizar esta operación.';
    }
    if (error?.status === 0) {
      return 'Error de conexión. Verifique su red.';
    }
    return error?.message || 'Error desconocido. Intente más tarde.';
  }

  private showNotification(message: string, type: 'success' | 'error' | 'info'): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [`snackbar-${type}`]
    });
  }

  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
    this.updateViewModel('loading', loading);
  }

  private updateViewModel(partial: Partial<TransactionViewModel>): void {
    this.viewModel.update(vm => ({ ...vm, ...partial }));
  }

  private getDefaultFilters(): TransactionFilter {
    return {
      page: 0,
      size: 25,
      sortBy: 'date',
      sortOrder: 'desc',
      status: undefined,
      type: undefined,
      dateFrom: undefined,
      dateTo: undefined,
      minAmount: undefined,
      maxAmount: undefined
    };
  }
}
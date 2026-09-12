import { Component, Input, ChangeDetectionStrategy, Signal, computed } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

export interface TransactionCardData {
  id: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed' | 'reversed';
  merchantName: string;
  merchantCategory: string;
  reference: string;
  balanceAfter?: number;
}

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    DatePipe,
    CurrencyPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card class="transaction-card" [class.credit]="data.type === 'credit'" [class.debit]="data.type === 'debit'">
      <mat-card-header>
        <div mat-card-avatar class="transaction-icon" [class.credit]="data.type === 'credit'" [class.debit]="data.type === 'debit'">
          <mat-icon>{{ data.type === 'credit' ? 'arrow_downward' : 'arrow_upward' }}</mat-icon>
        </div>
        <mat-card-title>{{ data.merchantName }}</mat-card-title>
        <mat-card-subtitle>{{ data.merchantCategory }}</mat-card-subtitle>
        <div class="status-chip">
          <mat-chip [class]="'status-' + data.status">
            {{ data.status | titlecase }}
          </mat-chip>
        </div>
      </mat-card-header>
      
      <mat-card-content>
        <div class="amount-section">
          <span class="amount" [class.positive]="data.type === 'credit'" [class.negative]="data.type === 'debit'">
            {{ data.type === 'credit' ? '+' : '-' }}{{ data.amount | currency:'USD':'symbol':'1.2-2' }}
          </span>
          <span class="balance-after" *ngIf="data.balanceAfter !== undefined">
            Balance: {{ data.balanceAfter | currency:'USD':'symbol':'1.2-2' }}
          </span>
        </div>
        
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">Descripción</span>
            <span class="detail-value">{{ data.description }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Fecha</span>
            <span class="detail-value">{{ data.date | date:'medium' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Referencia</span>
            <span class="detail-value reference">{{ data.reference }}</span>
          </div>
          <div class="detail-item" *ngIf="data.id">
            <span class="detail-label">ID</span>
            <span class="detail-value id">{{ data.id }}</span>
          </div>
        </div>
      </mat-card-content>
      
      <mat-card-actions align="end">
        <button mat-button color="primary" (click)="onViewDetails()">
          <mat-icon>visibility</mat-icon>
          Ver Detalles
        </button>
        <button mat-button (click)="onDownloadReceipt()">
          <mat-icon>receipt</mat-icon>
          Comprobante
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .transaction-card {
      margin: 16px 0;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      border-left: 4px solid transparent;
    }
    
    .transaction-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    
    .transaction-card.credit {
      border-left-color: #4caf50;
    }
    
    .transaction-card.debit {
      border-left-color: #f44336;
    }
    
    mat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 8px;
    }
    
    .transaction-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .transaction-icon.credit {
      background: linear-gradient(135deg, #4caf50, #2e7d32);
    }
    
    .transaction-icon.debit {
      background: linear-gradient(135deg, #f44336, #c62828);
    }
    
    .status-chip {
      margin-left: auto;
    }
    
    .status-completed {
      background-color: #e8f5e9 !important;
      color: #2e7d32 !important;
    }
    
    .status-pending {
      background-color: #fff3e0 !important;
      color: #e65100 !important;
    }
    
    .status-failed {
      background-color: #ffebee !important;
      color: #c62828 !important;
    }
    
    .status-reversed {
      background-color: #e3f2fd !important;
      color: #1565c0 !important;
    }
    
    .amount-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 16px;
    }
    
    .amount {
      font-size: 24px;
      font-weight: 600;
    }
    
    .amount.positive {
      color: #2e7d32;
    }
    
    .amount.negative {
      color: #c62828;
    }
    
    .balance-after {
      font-size: 14px;
      color: #757575;
    }
    
    .details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    
    .detail-item {
      display: flex;
      flex-direction: column;
    }
    
    .detail-label {
      font-size: 12px;
      color: #9e9e9e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .detail-value {
      font-size: 14px;
      color: #212121;
      margin-top: 4px;
    }
    
    .detail-value.reference,
    .detail-value.id {
      font-family: 'Roboto Mono', monospace;
      font-size: 12px;
    }
    
    mat-card-actions {
      padding: 8px 0;
    }
    
    mat-card-actions button {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
  `]
})
export class TransactionCardComponent {
  @Input({ required: true }) data!: TransactionCardData;
  @Input() showActions: boolean = true;
  
  private _isExpanded = false;
  
  get isExpanded(): boolean {
    return this._isExpanded;
  }
  
  readonly formattedDate: Signal<string> = computed(() => {
    if (!this.data?.date) return '';
    return new Date(this.data.date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  });
  
  readonly formattedTime: Signal<string> = computed(() => {
    if (!this.data?.date) return '';
    return new Date(this.data.date).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  });
  
  readonly amountClass: Signal<string> = computed(() => {
    return this.data?.type === 'credit' ? 'positive' : 'negative';
  });
  
  readonly statusColor: Signal<string> = computed(() => {
    const statusColors: Record<string, string> = {
      completed: '#2e7d32',
      pending: '#e65100',
      failed: '#c62828',
      reversed: '#1565c0'
    };
    return statusColors[this.data?.status] || '#757575';
  });
  
  toggleExpanded(): void {
    this._isExpanded = !this._isExpanded;
  }
  
  onViewDetails(): void {
    console.log(`[TransactionCard] Viewing details for transaction: ${this.data.id}`);
  }
  
  onDownloadReceipt(): void {
    console.log(`[TransactionCard] Downloading receipt for transaction: ${this.data.id}`);
  }
  
  onDisputeTransaction(): void {
    console.log(`[TransactionCard] Opening dispute dialog for transaction: ${this.data.id}`);
  }
}
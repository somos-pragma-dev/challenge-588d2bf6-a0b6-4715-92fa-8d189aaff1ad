import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TransactionsComponent } from './transactions.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionFiltersComponent } from './components/transaction-filters/transaction-filters.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionExportComponent } from './components/transaction-export/transaction-export.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TransactionListComponent,
        data: { title: 'Lista de Transacciones' }
      },
      {
        path: 'detail/:id',
        component: TransactionDetailComponent,
        data: { title: 'Detalle de Transacción' }
      },
      {
        path: 'export',
        component: TransactionExportComponent,
        data: { title: 'Exportar Transacciones' }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatProgressBarModule,
    TransactionsComponent,
    TransactionDetailComponent,
    TransactionFiltersComponent,
    TransactionListComponent,
    TransactionExportComponent
  ],
  exports: [
    RouterModule,
    TransactionsComponent
  ]
})
export class TransactionsModule {
  static forRoot(): any {
    return {
      ngModule: TransactionsModule,
      providers: []
    };
  }
}
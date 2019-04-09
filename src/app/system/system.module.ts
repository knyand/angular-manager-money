import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {BillComponent} from './bill/bill.component';
import {HistoryComponent} from './history/history.component';
import {PlanningComponent} from './planning/planning.component';
import {RecordsComponent} from './records/records.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { BillCardComponent } from './bill/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill/currency-card/currency-card.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule
  ],
  declarations: [SystemComponent, BillComponent, HistoryComponent, PlanningComponent, RecordsComponent, BillCardComponent, CurrencyCardComponent]
})
export class SystemModule {
}

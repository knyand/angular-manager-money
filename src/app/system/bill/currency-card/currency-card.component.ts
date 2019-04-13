import {Component, Input, OnInit} from '@angular/core';
import {CurrencyModel} from '../../../shared/currency.model';

@Component({
  selector: 'hm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currencies: CurrencyModel[];
  displayedColumns: string[] = ['cur', 'rate', 'scale'];

  constructor() {
  }

  ngOnInit() {
  }
}

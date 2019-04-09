import {Component, Input, OnInit} from '@angular/core';
import {AccountModel} from '../../../model/account.model';

@Component({
  selector: 'hm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() accounts: AccountModel[];
  displayedColumns: string[] = ['currency', 'sum'];

  constructor() {
  }

  ngOnInit() {
  }

}

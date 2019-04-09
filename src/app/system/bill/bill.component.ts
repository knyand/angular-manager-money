import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../../service/bill.service';
import {CurrencyModel} from '../../model/currency.model';
import {combineLatest, Subscription} from 'rxjs';
import {UserService} from '../../service/user.service';
import {AccountModel} from '../../model/account.model';

@Component({
  selector: 'hm-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit, OnDestroy {

  sub: Subscription;
  currencies: CurrencyModel[];
  accounts: AccountModel[];
  isLoaded = false;
  user;
  date = new Date();

  constructor(private billService: BillService, private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUserFromLocalStorage();
    this.refresh();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refresh() {
    this.isLoaded = false;
    this.currencies = [];
    this.accounts = [];
    this.sub = combineLatest(
      this.billService.getUserAccounts(this.user.id),
      this.billService.getRatesCurrency())
      .subscribe(
        ([acc, cur]) => {
          this.accounts = acc;
          this.currencies = cur;
          this.isLoaded = true;
        }
      );
  }
}

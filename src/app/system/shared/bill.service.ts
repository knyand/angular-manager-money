import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';
import {CurrencyModel} from '../../shared/model/currency.model';

@Injectable()
export class BillService {
  private host = '//localhost:9090/users';

  constructor(private http: HttpClient) {
  }

  getUserAccounts(id: string): Observable<any> {
    return this.http.get(`${this.host}/${id}`, {withCredentials: true});
  }

  getRatesCurrency(): Observable<CurrencyModel[]> {
    return merge(
      this.http.get('http://www.nbrb.by/API/ExRates/Rates/145'),
      this.http.get('http://www.nbrb.by/API/ExRates/Rates/292'),
      this.http.get('http://www.nbrb.by/API/ExRates/Rates/298')
    ).pipe(
      map(res => new CurrencyModel(res['Cur_ID'], res['Cur_Abbreviation'], res['Cur_OfficialRate'], res['Cur_Scale'])),
      toArray()
    );
  }
}

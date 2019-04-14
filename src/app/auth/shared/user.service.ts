import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/model/user.model';

@Injectable()
export class UserService {

  private host = '//localhost:9090/users';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: User): Observable<User> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
    });

    return this.http.get<User>(`${this.host}?email=${credentials.email}`, {headers, withCredentials: true});
  }

  registration(credentials: User): Observable<User> {
    return this.http.post<User>(`${this.host}`, {
      email: credentials.email,
      name: credentials.name,
      password: credentials.password,
      enabled: credentials.enabled
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

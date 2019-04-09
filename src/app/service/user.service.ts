import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = '//localhost:9090/users';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials): Observable<any> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    });

    return this.http.get(`${this.host}?email=${credentials.username}`, {headers, withCredentials: true});
  }

  registration(credentials): Observable<any> {
    return this.http.post(`${this.host}`, {
      email: credentials.email,
      name: credentials.username,
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

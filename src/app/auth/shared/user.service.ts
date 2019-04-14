import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/model/user.model';
import {API_BASE_URL} from '../../shared/app.config';

@Injectable()
export class UserService {

  private readonly host: string;

  constructor(private http: HttpClient, @Inject(API_BASE_URL) private baseUrl: string) {
    this.host = `${baseUrl}/users`;
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

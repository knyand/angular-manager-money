import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from '../../shared/app.config';
import {Category} from '../../shared/model/category.model';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryService {
  private readonly host: string;

  constructor(private http: HttpClient, @Inject(API_BASE_URL) private baseURL: string) {
    this.host = `${baseURL}/category`;
  }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.host,
      {name: category.categoryName, capacity: category.limit},
      {withCredentials: true});
  }
}

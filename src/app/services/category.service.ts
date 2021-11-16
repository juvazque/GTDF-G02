import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this._http.get('http://localhost:8080/category');
  }

  getCategory(id: number): Observable<any> {
    return this._http.get('http://localhost:8080/category/' + id);
  }

  postCategory(category: Category): Observable<any> {
    var categoryJson = {
      "name": category.name,
      "user": category.user,
      "tasks": category.tasks,
    };
    return this._http.post('http://localhost:8080/category', categoryJson);
  }

  putCategory(id: number, category: Category): Observable<any> {
    var categoryJson = {
      "name": category.name,
      "user": category.user,
      "tasks": category.tasks,
    };
    return this._http.put('http://localhost:8080/category/' + id, categoryJson);
  }

  deleteCategory(id: number): Observable<any> {
    return this._http.delete('http://localhost:8080/category/' + id, { responseType: 'text' })
  }

  deleteCategoryWithTasks(id: number): Observable<any> {
    return this._http.delete('http://localhost:8080/category/all/' + id, { responseType: 'text' })
  }

}

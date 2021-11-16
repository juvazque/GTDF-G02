import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this._http.get('http://localhost:8080/user');
  }

  getUser(id: number): Observable<any> {
    return this._http.get('http://localhost:8080/user/' + id);
  }

  postUser(user: User): Observable<any> {
    var userJson = {
      "email": user.email,
      "admin": user.admin,
      "login": user.login,
      "password": user.password,
      "status": user.status,
      "tasks": user.tasks,
      "groups": user.groups,
      "categories": user.categories
    };
    return this._http.post('http://localhost:8080/user', userJson);
  }

  putUser(id: number, user: User): Observable<any> {
    var userJson = {
      "email": user.email,
      "admin": user.admin,
      "login": user.login,
      "password": user.password,
      "status": user.status,
      "tasks": user.tasks,
      "groups": user.groups,
      "categories": user.categories
    };
    return this._http.put('http://localhost:8080/user/' + id, userJson);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete('http://localhost:8080/user/' + id, {responseType:'text'})
  }

  blockUser(id: number): Observable<any> {
    return this._http.put('http://localhost:8080/user/block/' + id, null);
  }

}

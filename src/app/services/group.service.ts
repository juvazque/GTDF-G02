import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _http: HttpClient) {
  }

  getGroups(): Observable<any> {
    return this._http.get('http://localhost:8080/group');
  }

  getGroup(id: number): Observable<any> {
    return this._http.get('http://localhost:8080/group/' + id);
  }

  postGroup(group: Group): Observable<any> {
    var groupJson = {
      "description": group.description,
      "userAdmin": group.userAdmin,
      "dateCreated": group.dateCreated,
      "tasks": group.tasks,
      "users": group.users
    };
    return this._http.post('http://localhost:8080/group', groupJson);
  }

  putGroup(id: number, group: Group): Observable<any> {
    var groupJson = {
      "description": group.description,
      "userAdmin": group.userAdmin,
      "dateCreated": group.dateCreated,
      "tasks": group.tasks,
      "users": group.users
    };
    return this._http.put('http://localhost:8080/group/' + id, groupJson);
  }

  deleteGroup(id: number): Observable<any> {
    return this._http.delete('http://localhost:8080/group/' + id, { responseType: 'text' })
  }

  deleteGroupWithTasks(id: number): Observable<any> {
    return this._http.delete('http://localhost:8080/group/all/' + id, { responseType: 'text' })
  }

  changeGroupAdmin(id: number, idUser: number): Observable<any> {
    var userJson = {
      "id": idUser
    };
    return this._http.put('http://localhost:8080/group/admin/' + id, userJson);
  }

  addUser(id: number, idUser: number): Observable<any> {
    var userJson = {
      "id": idUser
    };
    return this._http.put('http://localhost:8080/group/addUser/' + id, userJson);
  }

  leaveGroup(id: number, idUser: number): Observable<any> {
    var userJson = {
      "id": idUser
    };
    return this._http.put('http://localhost:8080/group/leaveGroup/' + id, idUser);
  }

  expelUserFromGroup(id: number, idUser: number): Observable<any> {
    var userJson = {
      "id": idUser
    };
    return this._http.put('http://localhost:8080/group/expelUser/' + id, idUser);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) {
  }

  getTasks(): Observable<any> {
    return this._http.get('http://localhost:8080/task');
  }

  getTask(id: number): Observable<any> {
    return this._http.get('http://localhost:8080/task/' + id);
  }

  postTask(task: Task): Observable<any> {
    var taskJson = {
      "title": task.title,
      "comments": task.comments,
      "created": task.created,
      "planned": task.planned,
      "finished": task.finished,
      "user": task.user,
      "category": task.category,
      "group": task.group
    };
    return this._http.post('http://localhost:8080/task', taskJson);
  }

  putTask(id: number, task: Task): Observable<any> {
    var taskJson = {
      "title": task.title,
      "comments": task.comments,
      "created": task.created,
      "planned": task.planned,
      "finished": task.finished,
      "user": task.user,
      "category": task.category,
      "group": task.group
    };
    return this._http.put('http://localhost:8080/task/' + id, taskJson);
  }

  deleteTask(id: number): Observable<any> {
    return this._http.delete('http://localhost:8080/task/' + id, { responseType: 'text' })
  }

  getTodayTasks(): Observable<any> {
    return this._http.get('http://localhost:8080/task/today');
  }

  getWeekTasks(): Observable<any> {
    return this._http.get('http://localhost:8080/task/week');
  }

  finishTask(id: number): Observable<any> {
    return this._http.put('http://localhost:8080/task/' + id, null);
  }

  getInboxTasks(): Observable<any> {
    return this._http.get('http://localhost:8080/task/category/inbox');
  }

  getCategoryTasks(id: number): Observable<any> {
    return this._http.get('http://localhost:8080/task/category/' + id);
  }

  changeCategory(id: number, idCategory: number): Observable<any> {
    var categoryJson = {
      "id": idCategory
    };
    return this._http.put('http://localhost:8080/task/category/' + id, categoryJson);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';

const ApiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${ApiUrl}/todos`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${ApiUrl}/todos`, todo)
  } 

  updateTodo(id, value) {
    return this.http.patch(`${ApiUrl}/todos/${id}`, {complete: value})
  }

  deleteTodo(id) {
    return this.http.delete(`${ApiUrl}/todos/${id}`)
  }
}

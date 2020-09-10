import { Local } from './../models/Local';
import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: any = 'https://jsonplaceholder.typicode.com/todos';
  localUrl = '/assets/data/employees.json';
  todoLimit = '?_limit=10';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  getLocaly(): Observable<Local[]> {
    return this.http.get<Local[]>(this.localUrl);
    // .pipe(Cache(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse): void {}

  // getLocaly(): any {
  //   return [
  //     { id: 1, name: 'zee', age: 24 },
  //     { id: 2, name: 'salem', age: 33 },
  //     { id: 3, name: '3bdoo', age: 44 },
  //     { id: 4, name: 'naser', age: 55 },
  //   ];
  // }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    // console.log(todo.id + '-Test!');
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions);
  }
  // Delete Todo ..
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, this.httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions);
  }
}

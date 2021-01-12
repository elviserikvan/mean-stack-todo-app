import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/x-www-form-urlencoded'
	})
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiURL:string = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  getTodos():Observable<any> {
	return this.http.get(this.apiURL);
  }

  addTodo(todo) {
	let data = `title=${todo.title}&completed=${todo.completed}`;
	return this.http.post<Todo>(this.apiURL, data, httpOptions);
  }

  updateTodo(id):Observable<Todo> {
	return this.http.put<Todo>(`${this.apiURL}/${id}`, {});
  }

  deleteTodo(id):Observable<any> {
  	return this.http.delete<Todo>(`${this.apiURL}/${id}`, {});
  }
  
}

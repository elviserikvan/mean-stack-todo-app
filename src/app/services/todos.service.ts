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

  apiURL:string = '/api';


  constructor(private http: HttpClient) { }

  getTodos():Todo[] {
	return [
		{
			_id: '1',
			title: 'First Todo',
			completed: false
		},
		{
			_id: '2',
			title: 'Second Todo',
			completed: true
		},
		{
			_id: '3',
			title: 'Third Todo',
			completed: false
		}

	];
	//return this.http.get(this.apiURL);
  }

  addTodo(todo) {
	let id = Math.floor(Math.random() * (10000 - 10)) + 10;
	todo._id = id;
	return todo;
	/*
	let data = `title=${todo.title}&completed=${todo.completed}`;
	return this.http.post<Todo>(this.apiURL, data, httpOptions);
       */
  }

  updateTodo(todo):Todo {
	todo.completed = !todo.completed;
	return todo;
	//return this.http.put<Todo>(`${this.apiURL}/${id}`, {});
  }

  /*
  deleteTodo(id):Observable<any> {
  	return this.http.delete<Todo>(`${this.apiURL}/${id}`, {});
  }
 */
  
}

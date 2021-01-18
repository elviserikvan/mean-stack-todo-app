import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../services/todos.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
	  this.todos = this.todoService.getTodos();
	  /*
	  this.todoService.getTodos().subscribe(todos => {	  	
		  this.todos = todos;
	  })
	 */
  }

  addTodo(todo) {
	let nTodo = this.todoService.addTodo(todo);
	this.todos.push(nTodo);

	/*
	this.todoService.addTodo(todo).subscribe(t => {
			this.todos.push(t);
	});
       */
  }

  deleteTodo(todo) {

	  this.todos = this.todos.filter(t => t._id != todo._id);

	  /*
	  this.todoService.deleteTodo(todo._id).subscribe(resp => {
		  if(!resp.error) {
			  this.todos = this.todos.filter(t => t._id != todo._id);
		  }
	  });
	 */
  }
}

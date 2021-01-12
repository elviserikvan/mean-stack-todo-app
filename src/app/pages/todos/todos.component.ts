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
	  this.todoService.getTodos().subscribe(todos => {	  	
		  this.todos = todos;
	  })
  }

  addTodo(todo) {
	this.todoService.addTodo(todo).subscribe(t => {
		this.todos.push(t);
	});
  }

  deleteTodo(todo) {
	  this.todoService.deleteTodo(todo._id).subscribe(resp => {
		  this.todos = this.todos.filter(t => t._id != todo._id);
	  });
  }
}

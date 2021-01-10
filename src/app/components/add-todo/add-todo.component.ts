import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  // I use this to tell the parent component to add a new todo, so it can add it to the UI
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // this property is binded with the add todo form
  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
	  let todo = {
	  	title: this.title,
		completed: false
	  }
	
	  this.addTodo.emit(todo);
	  this.title = '';
  }
}

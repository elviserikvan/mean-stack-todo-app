import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  setClasses() {
  	return {
		completed: this.todo.completed
	}
  }

  setChecked() {
  	if (this.todo.completed) {
		return '';
	}else {
		return null;
	}
  }

  setCompleted() {
  	this.todo.completed = !this.todo.completed;
	this.todoService.updateTodo(this.todo._id).subscribe(t => {
		
	});
  }
}

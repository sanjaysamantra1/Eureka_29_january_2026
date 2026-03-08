import { TodoService } from './../../services/todo-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {
  todoService = inject(TodoService);

  addNewTodo(newToDo: string) {
    this.todoService.addNewTodo({ value: newToDo });
  }
}

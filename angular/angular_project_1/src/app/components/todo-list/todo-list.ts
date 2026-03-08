import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todoArr$!: Observable<any>;
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoArr$ = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.deleteToDo(id);
  }
}

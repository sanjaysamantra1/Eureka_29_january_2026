import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, toggleTodo } from '../../actions/todo.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './todo-crud.html',
  styleUrl: './todo-crud.css',
})
export class TodoCrud {
  todos$: Observable<any> | undefined;

  constructor(private store: Store) {
    this.todos$ = this.store.select((state: any) => state.todoReducer); // selector
  }
  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id: id }));
  }

}

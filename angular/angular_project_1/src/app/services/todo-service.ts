import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Todo {
  id: any;
  value: string;
}
const initialTodos = [
  { id: 1, value: 'Complete Angular Assignment' },
  { id: 2, value: 'Learn Java Stream API' },
  { id: 3, value: 'Learn SQL' }
];
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoSubject = new BehaviorSubject<Todo[]>(initialTodos); // writeable
  readonly todoObs = this.todoSubject.asObservable(); // readonly, only subscribe

  private todoArr: Todo[] = this.todoSubject.value;
  private nextId = 4;

  addNewTodo(item: any) {
    item.id = this.nextId++;
    this.todoArr.push(item);
    this.todoSubject.next([...this.todoArr]);
  }
  deleteToDo(id: number) {
    this.todoArr.forEach((todo, ind) => {
      if (todo.id === id) {
        this.todoArr.splice(ind, 1);
      }
    });
    this.todoSubject.next([...this.todoArr]);
  }
}

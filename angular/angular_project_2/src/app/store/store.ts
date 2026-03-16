import { counterReducer } from '../reducers/counter.reducer';
import { todoReducer } from '../reducers/todo.reducer';

export const myStore = {
  count: counterReducer,
  todoReducer: todoReducer,
};

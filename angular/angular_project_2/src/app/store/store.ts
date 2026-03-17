import { counterReducer } from '../reducers/counter.reducer';
import { employeesReducer } from '../reducers/employee.reducer';
import { todoReducer } from '../reducers/todo.reducer';

export const myStore = {
  count: counterReducer,
  todoReducer: todoReducer,
  employees: employeesReducer,
};

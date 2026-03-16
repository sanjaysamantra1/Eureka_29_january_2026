import { Component, signal } from '@angular/core';
import { MaterialDemo } from './components/material-demo/material-demo';
import { Counter } from "./components/counter/counter";
import { TodoCrud } from './components/todo-crud/todo-crud';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo,
    // Counter
    TodoCrud
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_project_2');

  addition(num1: number, num2: number) {
    return num1 + num2;
  }
  sumOfDigits(num: number) {
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }

  async fetchuserData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let finalResponse = await response.json();
    return finalResponse;
  }
}

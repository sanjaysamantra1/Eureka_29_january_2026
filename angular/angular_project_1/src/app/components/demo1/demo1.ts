import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  intervalId: number;

  constructor() {
    this.intervalId = setInterval(() => {
      console.log('I am setInterval from demo-1')
    }, 1000)
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit')
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.intervalId);
  }
}

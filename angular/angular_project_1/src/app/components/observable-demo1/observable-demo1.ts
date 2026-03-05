import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()))

  ngOnInit() {
    // this.from_demo();
    this.interval_demo();
  }
  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsObservable = from(cars);
    carsObservable.subscribe((val) => console.log('Value Received:', val));
  }
  numObservable: any;
  evenNums: any;
  interval_demo() {
    this.numObservable = interval(1000);
    // this.numObservable.subscribe((val: any) => console.log('Value Received:', val));
    this.evenNums = this.numObservable.pipe(filter((val: any) => val % 2 == 0))
  }
}

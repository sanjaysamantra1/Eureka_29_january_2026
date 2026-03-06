import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, forkJoin, from, interval, map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  httpClient = inject(HttpClient);

  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()))

  ngOnInit() {
    // this.from_demo();
    // this.interval_demo();
    // this.forkjoin_demo();
    // this.mergeMap_demo();
    this.concatMap_demo();
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

  forkjoin_demo() {
    let api1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api2 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    let api3 = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    forkJoin([api1, api2, api3]).subscribe(responseArr => {
      console.log(responseArr)
    });
  }


  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}

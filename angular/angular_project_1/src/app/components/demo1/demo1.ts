import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';
import { ObjectUtilService } from '../../services/object-util-service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  intervalId: number;

  // mathService = new MathService();
  constructor(private mathService: MathService, private objectUtil: ObjectUtilService) { // dependency Injection
    this.intervalId = setInterval(() => {
      console.log('I am setInterval from demo-1')
    }, 1000)
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit');

    let sumResult = this.mathService.sum([10, 20, 30, 40, 50])
    console.log('sumResult: ', sumResult)

    console.log('Is Empty? ', this.objectUtil.isEmpty({ a: 10, b: 20 }))
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.intervalId);
  }
}

import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {
  mathService = inject(MathService); // Dependency Injection

  ngOnInit() {
    console.log('Demo-2 ngOnInit');

    let avgResult = this.mathService.average([10, 20, 30, 40, 50]);
    console.log('avgResult:', avgResult)
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy')
  }
}

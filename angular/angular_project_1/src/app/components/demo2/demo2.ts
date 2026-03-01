import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {
  ngOnInit() {
    console.log('Demo-2 ngOnInit')
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy')
  }
}

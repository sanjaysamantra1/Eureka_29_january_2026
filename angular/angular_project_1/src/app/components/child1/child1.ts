import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['a','userName']
})
export class Child1 {
  a: any;
  userName: any;
}

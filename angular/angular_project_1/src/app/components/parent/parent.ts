import { Component } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';

@Component({
  selector: 'app-parent',
  imports: [
    Child1,
    Child2
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  a = 10;
}

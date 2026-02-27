import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  inputs:['a']
})
export class Child2 {
  a:any;
  userName = 'Sanjay Kumar';
}

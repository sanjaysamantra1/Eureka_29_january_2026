import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-demo',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './directive-demo.html',
  styleUrl: './directive-demo.css',
})
export class DirectiveDemo {
  num: number = 4;
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];
  selectedCar: string = '';
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  myStyle1 = {
    "color": "red",
    "font-size": "28px",
    "border": "5px dotted green"
  }
  myStyle2 = {
    "color": "orange",
    "font-size": "28px",
    "border": "5px dotted blue"
  }

  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }
}

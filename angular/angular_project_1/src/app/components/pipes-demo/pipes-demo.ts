import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName: string = 'SaChin tEnDulKAr';
  salary: number = 5000;
  dateObj = new Date();
  user = { name: 'Sanjay', age: 50, add: 'bangalore', role: 'trainer' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Mahindra'];
  msg: string = 'Hello';
  num : number = 21;
}

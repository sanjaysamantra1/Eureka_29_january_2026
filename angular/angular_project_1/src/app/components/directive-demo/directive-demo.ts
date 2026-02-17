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
}

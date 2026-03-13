import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule, CommonModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    email: 'sanjay@gmail.com',
  };

  hasChanges: boolean = true;

  submitMyForm(data: any) {
    console.log(data);
    this.hasChanges = false;
  }
}

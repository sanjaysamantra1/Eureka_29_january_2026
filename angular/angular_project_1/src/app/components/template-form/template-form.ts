import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    email:'sanjay@gmail.com'
  };
  submitMyForm(formDate: any) {
    console.log(formDate);
  }
}

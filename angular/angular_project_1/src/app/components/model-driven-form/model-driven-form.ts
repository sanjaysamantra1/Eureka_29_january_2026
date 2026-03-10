import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  minAllowed = 5;
  registerForm: any;

  constructor() {
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl('virat', [
          Validators.required,
          Validators.minLength(this.minAllowed),
        ]),
        lastName: new FormControl('kohli', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('virat@gmail.com', [Validators.required, Validators.email]),
        address: new FormGroup({
          street: new FormControl('street-1'),
          city: new FormControl('Texas'),
          pincode: new FormControl('123456'),
        }),
      },
      { updateOn: 'blur' },
    );
  }

  submitMyForm(formData: any) {
    console.log(formData);
    console.log(formData.value);
  }

  updateFormData() {
    // this.registerForm.patchValue({ firstName: 'Rohit' });
    this.registerForm.setValue({ firstName: 'Rohit' });
  }
}

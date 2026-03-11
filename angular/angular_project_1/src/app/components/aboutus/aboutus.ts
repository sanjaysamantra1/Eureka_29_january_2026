import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
  constructor(
    private routerObj: Router,
    private location: Location,
  ) {}

  doSomethingAndGoToHome() {
    // any logic
    console.log('Do Some Thing');
    this.routerObj.navigate(['/home']);
  }

  goBack(){
    this.location.back()
  }
}

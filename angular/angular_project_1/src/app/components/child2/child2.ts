import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  imports: [
    FormsModule
  ],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  inputs: ['a'],
  outputs: ['eventEmitterObj']
})
export class Child2 {
  a: any;
  userName = 'Sanjay Kumar';
  userRole = 'Trainer';

  eventEmitterObj = new EventEmitter();
  sendDataToParent() {
    this.eventEmitterObj.emit(this.userRole)
  }
}

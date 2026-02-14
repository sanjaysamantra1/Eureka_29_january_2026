import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";

@Component({
  selector: 'app-body',
  imports: [
    DataBinding
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}

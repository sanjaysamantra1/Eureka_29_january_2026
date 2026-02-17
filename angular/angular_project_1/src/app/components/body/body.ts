import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
import { DirectiveDemo } from '../directive-demo/directive-demo';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    DirectiveDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}

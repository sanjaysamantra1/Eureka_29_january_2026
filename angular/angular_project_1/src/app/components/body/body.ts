import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
import { DirectiveDemo } from '../directive-demo/directive-demo';
import { ProductList } from '../product-list/product-list';
import { Parent } from '../parent/parent';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // DirectiveDemo
    // ProductList
    // PipesDemo
    Parent
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}

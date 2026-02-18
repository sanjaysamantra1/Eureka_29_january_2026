import { Categories } from './../categories/categories';
import { Component } from '@angular/core';
import productData from './product-data';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  categorySet: any = new Set();

  constructor() {
    this.categorySet.add('All')
    this.categorySet.add('Kids clothing')
    productData.forEach(product => {
      this.categorySet.add(product.category);
    })
  }

  categoryChanged(event: any) {
    const selectedCategory = event.target.value;
    if (selectedCategory == 'All') {
      this.productArr = productData;
    } else {
      this.productArr = productData.filter(product => product.category == selectedCategory);
    }
  }


}

import { Categories } from './../categories/categories';
import { Component } from '@angular/core';
import productData from './product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  categorySet: any = new Set();
  faStar = faStar;
  p: number = 1;

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

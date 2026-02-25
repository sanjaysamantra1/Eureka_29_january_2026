import { Categories } from './../categories/categories';
import { Component } from '@angular/core';
import productData from './product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Textonly } from '../../custom-directives/textonly';
import { Disablepaste } from '../../custom-directives/disablepaste';
import { Zoomin } from '../../custom-directives/zoomin';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    Textonly,
    Disablepaste,
    Zoomin
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

  openAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackbar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

}

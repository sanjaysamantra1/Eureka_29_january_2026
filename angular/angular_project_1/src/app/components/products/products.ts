import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productArr: any = signal([]);
  isLoading = signal(false);

  constructor(private httpClient: HttpClient) {
  }

  fetchProducts() {
    this.isLoading.set(true);
    this.httpClient.get('https://fakestoreapi.com/products').subscribe(response => {
      this.productArr.set(response);
      this.isLoading.set(false);
    })
  }

}

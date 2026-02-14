import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule,
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://cdn1.wionews.com/dev/wion/images/2025/20250505/virat-kohli-ct-3-201445.png';
  flag: boolean = true;
  message: string = '';

  addToCart() {
    alert('Your Item is Added To the cart!!!')
  }
  performSearch(event: any) {
    console.log(event.target.value)
  }
}

import { Component } from '@angular/core';

import { productss } from '../products.module';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = productss;

  share() {
    window.alert('The product has been shared!');
  }

}

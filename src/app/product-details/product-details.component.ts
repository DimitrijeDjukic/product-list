import { Component, OnInit } from '@angular/core';
import { Product, productss } from '../products.module';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = productss.find(product => product.id === productIdFromRoute);


  }

  addToCartMethod(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


}

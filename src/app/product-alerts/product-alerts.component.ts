import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Product } from '../products.module';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();


}

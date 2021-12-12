import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // extract the product ID from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('productId'));
    // set this.product to the corresponding product
    this.product = products.find(({ id }) => id === productIDFromRoute);
  }
}

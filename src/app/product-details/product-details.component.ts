import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // extract the product ID from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('productId'));
    // set this.product to the corresponding product
    this.product = products.find(({ id }) => id === productIDFromRoute);
  }

  product: Product | undefined;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('The product has been added to the cart');
  }
}

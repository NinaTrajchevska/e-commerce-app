import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css'],
})
export class ProductListingsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private graphqlService: GraphqlService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.graphqlService.getProducts().subscribe(({ data }: any) => {
      this.products = data.products.items;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }
}

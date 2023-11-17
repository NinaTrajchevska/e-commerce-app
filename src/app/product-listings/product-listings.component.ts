import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css'],
})
export class ProductListingsComponent implements OnInit {
  products: any[] = [];

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.graphqlService.getProducts().subscribe(({ data }: any) => {
      this.products = data.products.items;
    });
  }

  addToCart(productId: string): void {
    console.log('Added to cart:', productId);
  }
}

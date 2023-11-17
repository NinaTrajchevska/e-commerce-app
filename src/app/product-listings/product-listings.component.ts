// src/app/product-listings/product-listings.component.ts
import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css'],
})
export class ProductListingsComponent implements OnInit {
  products: any[] = [];

  constructor(private graphqlService: GraphqlService) {}

  ngOnInit(): void {
    this.graphqlService.getProducts().subscribe(({ data }: any) => {
      this.products = data.products.items;
    });
  }
}

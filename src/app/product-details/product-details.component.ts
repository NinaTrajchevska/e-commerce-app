
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private graphqlService: GraphqlService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.graphqlService.getProductById(productId).subscribe(({ data }: any) => {
        this.product = data.product;
      });
    }
  }

  addToCart(productId: string): void {
    console.log('Added to cart:', productId);
   
  }
}

import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getProducts() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          products(take: 10) {
            items {
              id
              name
              description
            }
          }
        }
      `,
    }).valueChanges;
  }

  getProductById(productId: string) {
    return this.apollo.watchQuery({
      query: gql`
        query ProductById($productId: ID!) {
          product(id: $productId) {
            id
            name
            description
          }
        }
      `,
      variables: {
        productId,
      },
    }).valueChanges;
    
  }

}

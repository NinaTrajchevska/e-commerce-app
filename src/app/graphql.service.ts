// src/app/graphql.service.ts
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
              variants {
                id
                priceWithTax {
                  value
                  currencyCode
                }
              }
            }
          }
        }
      `,
    }).valueChanges;
  }
}

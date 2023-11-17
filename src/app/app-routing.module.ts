import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingsComponent } from './product-listings/product-listings.component';

const routes: Routes = [
  {
    path: "productList",
    component: ProductListingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

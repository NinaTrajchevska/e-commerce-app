import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CartComponent } from './cart/cart.component'; 
const routes: Routes = [
  { path: 'products', component: ProductListingsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'cart', component: CartComponent }, 
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

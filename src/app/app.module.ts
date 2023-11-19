import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListingsComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

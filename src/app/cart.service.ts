import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems = this.cartItemsSource.asObservable();

  addToCart(item: any): void {
    const currentCartItems = this.cartItemsSource.value;
    const newCartItems = [...currentCartItems, item];
    this.cartItemsSource.next(newCartItems);
  }
}

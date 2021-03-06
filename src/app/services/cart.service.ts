import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { BehaviorSubject } from 'node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData: IProduct[] = [];
  private messageSource = new BehaviorSubject(0);
  currentCartlengthChanged = this.messageSource.asObservable();

  constructor() { }



  addToCart(product: IProduct): void {

    this.cartData.push(product);
    this.messageSource.next(this.cartData.length);

  }



  getCartProducts(): IProduct[] {

    return this.cartData;

  }

  getCartLength(): number {

    return this.cartData.length;

  }

  getCartTotalAmount(): number {

    let total = 0;

    this.cartData.forEach( record => total += record.unitPrice);

    return total;

  }

  resetCart(): void {

    this.cartData = [];

  }


}

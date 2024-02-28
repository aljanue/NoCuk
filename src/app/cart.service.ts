import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  private quantity = new Subject<number>();

  addToCart(product: any) {
    let productExists = false;

    for (const element of this.items) {
      if (element.name === product.name) {
        element.quantity++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      product.quantity = 1;
      this.items.push(product);
    }

    this.quantity.next(this.items.reduce((sum, current) => sum + current.quantity, 0));
  }

  changeQuantity(product: any, quantity: number) {
    for (const element of this.items) {
      if (element.name === product.name) {
        if (quantity === 0) {
          element.quantity -= 1;
        } else {
          element.quantity += 1;
        }
        if (element.quantity === 0) {
          this.removeItem(element);
        }
      }
    }
    this.quantity.next(this.items.reduce((sum, current) => sum + current.quantity, 0));
  }

  getItems() {
    return this.items;
  }

  getSize() {
    return this.quantity.asObservable();
  }

  removeItem(product: any) {
    this.items = this.items.filter(item => item !== product);
    this.quantity.next(this.items.reduce((sum, current) => sum + current.quantity, 0));
  }
}
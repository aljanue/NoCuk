import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];


  addToCart(product: any) {
    console.log(product);
    this.items.push(product);
    console.log(this.items);
  }


  getItems() {
    console.log(this.items);
    return this.items;
  }

  removeItem(product: any) {
    this.items = this.items.filter(item => item !== product);
    console.log(this.items);
  }
}

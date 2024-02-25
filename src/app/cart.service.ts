import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];


  addToCart(product: any) {
    if(this.items.length === 0 || this.items === undefined){
      product.quantity=1;
      this.items.push(product);
    } else{
    for(const element of this.items){
      if(element.name === product.name){
        element.quantity++;
        console.log(element.quantity);
        console.log(this.items);
        return;
      }
      else{
        product.quantity=1;
        this.items.push(product);
        console.log(this.items);
        return;
    }
  }
  }
}
  changeQuantity(product:any, quantity:number){
    for(const element of this.items){
      if(element.name === product.name){
        if(quantity === 0){
          element.quantity -= 1;
        }else{
          element.quantity += 1;
        }
        if(element.quantity === 0){
          this.removeItem(element);
        }
      }
    }
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

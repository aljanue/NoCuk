import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems:any[] = [];
  constructor(private _cartService: CartService) { }

  ngOnInit(){
    this.cartItems = this._cartService.getItems();
  }
  changeQuantity(product:any, x:number){
    this._cartService.changeQuantity(product, x);
  }
  removeItem(item:any){
    this._cartService.removeItem(item);
  }
}

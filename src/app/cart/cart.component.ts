import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cartItems:any[] = [];
  logged = false;
  constructor(private _cartService: CartService, private _loginService: LoginService) { }

  ngOnInit(){
    this.cartItems = this._cartService.getItems();
    this._loginService.getLogged().subscribe(logged => {
      this.logged = logged;
    });
  }
  changeQuantity(product:any, x:number){
    this._cartService.changeQuantity(product, x);
  }
  removeItem(item:any){
    this._cartService.removeItem(item);
  }
  setRoute(x:string){
    this._loginService.setRoute(x);
  }
}

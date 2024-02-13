import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  showMenu = false;
  cartItems:any[] = [];

  constructor(private _cartService: CartService) { }
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  ngOnInit(){
    this.cartItems = this._cartService.getItems();
  }
}

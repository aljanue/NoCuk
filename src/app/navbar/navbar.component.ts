import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  showMenu = false;
  logged = false;
  quantity:number=0;

  constructor(private _cartService: CartService, private _loginService:LoginService) { }
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    this._cartService.getSize().subscribe(size => {
      this.quantity = size; // Actualizar el número de la cesta
    });
    this._loginService.getLogged().subscribe(logged => {
      this.logged = logged; // Actualizar el estado de inicio de sesión
    });
  }

  setRoute(x:string){
    this._loginService.setRoute(x);
  }
}

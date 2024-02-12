import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsIndexComponent } from './products-index/products-index.component';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent, HomeComponent, ProductsIndexComponent, LoginComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  user= {name: 'aljanue', password: '1234'};
}

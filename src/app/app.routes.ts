import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsIndexComponent } from './products-index/products-index.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'products', component:ProductsIndexComponent},
    {path: 'cart', component:CartComponent},
    {path: 'login', component:LoginComponent},

];

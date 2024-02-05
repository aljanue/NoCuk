import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-products-index',
  standalone: true,
  imports: [CommonModule, ProductsComponent, CategoriesComponent],
  templateUrl: './products-index.component.html',
  styleUrl: './products-index.component.css'
})
export class ProductsIndexComponent {
  categories= [
    {id: 0, name: "All", img: '../../assets/images/all-food.png'},
    {id: 1, name: 'Pasta', img: '../../assets/images/pasta.jpg'},
    {id: 2, name: 'Salad', img: '../../assets/images/pesto-salad.avif'},
    {id: 3, name: 'Meat', img: '../../assets/images/grilled-chicken.jpg'},
    {id: 4, name: 'Fish', img: '../../assets/images/grilled-salmon.jpg'},
    {id: 5, name: 'Dessert', img: '../../assets/images/tiramisu.jpg'}
  ];

  products= [
    {id: 1, name: 'Spaghetti al Tartufo e Funghi', categoryId: 1, img: '../../assets/images/spaghetti-tartufo.webp', price: 12.99, description: 'Spaghetti with truffle and mushrooms'},
    {id: 2, name: 'Penne alla Carbonara Originale', categoryId: 1, img: '../../assets/images/penne-carbonara.jpg', price: 11.99, description: 'Penne with guanciale, eggs and parmesano'},
    {id: 3, name: 'Fusilli alla Marinara', categoryId: 1, img: '../../assets/images/fusilli-marinara.jpg', price: 13.99, description: 'Fusilli with tomato and garlic sauce'},
    {id: 4, name: 'Penne al Pesto', categoryId: 1, img: '../../assets/images/penne-pesto.jpg', price: 10.99, description: 'Penne with basil and pine nuts'},
    {id: 5, name: 'Spaghetti al Aglio e Vongole', categoryId: 1, img: '../../assets/images/spaghetti-aglio.jpg', price: 14.99, description: 'Spaghetti with garlic and clams'},
    {id: 6, name: 'Greek Salad', categoryId: 2, img: '../../assets/images/greek-salad.webp', price:  7.99, description: 'Salad with juicy tomatoes, crisp cucumbers, olives, red onions, feta cheese and olive oil.'},
    {id: 7, name: 'Caesar Salad', categoryId: 2, img: '../../assets/images/caesar-salad.jpg', price: 8.99, description: 'Salad with romaine lettuce, croutons, parmesan cheese, lemon juice, olive oil, egg, Worcestershire sauce, garlic, and black pepper.'},
    {id: 8, name: 'Cobb Salad', categoryId: 2, img: '../../assets/images/cobb-salad.jpg', price: 9.99, description: 'Salad with bacon, avocado, tomatoes, hard-boiled eggs, chives, Roquefort cheese, and red-wine vinaigrette.'},
    {id: 9, name: 'Caprese Salad with Basil and Pesto', categoryId: 2, img: '../../assets/images/pesto-salad.avif', price: 6.99, description:'Salad with tomatoes, mozzarella, basil, and pesto sauce.'},
    {id: 10, name: 'Grilled Chicken', categoryId: 3, img: '../../assets/images/grilled-chicken.jpg', price: 10.99, description:'Grilled chicken with a side of vegetables and potatoes.'},
    {id: 11, name: 'Burger', categoryId: 3, img: '../../assets/images/burger.jpg', price: 9.99, description:'Burger with lettuce, tomato, onion, and cheese.'},
    {id: 12, name: 'Steak', categoryId: 3, img: '../../assets/images/steak.jpg', price: 15.99, description:'Steak with a side of vegetables and potatoes.'},
    {id: 13, name: 'Grilled Salmon', categoryId: 4, img: '../../assets/images/grilled-salmon.jpg', price: 16.99, description:'Grilled salmon with a side of vegetables and potatoes.'},
    {id: 14, name: 'Surprise menu. Sushi', categoryId: 4, img: '../../assets/images/sushi.avif', price: 18.99, description:''},
    {id: 15, name: 'Fish & Chips', categoryId: 4, img: '../../assets/images/fish-chips.jpg', price: 14.99, description:'Fish & Chips with tartar sauce and lemon.'},
    {id: 16, name: 'Tiramisu', categoryId: 5, img: '../../assets/images/tiramisu.jpg', price: 5, description:'Tiramisu with coffee and cocoa.'},
    {id: 17, name: 'Cheesecake', categoryId: 5, img: '../../assets/images/cheesecake.jpg', price: 5.99, description:'Cheesecake with strawberries and whipped cream.'},
    {id: 18, name: 'Cannoli di Pistacchio', categoryId: 5, img: '../../assets/images/cannoli.jpg', price: 3.49, description:'Cannoli with pistachio and chocolate chips.'},
    {id: 19, name: 'Chocolate and Hazelnut Cake', categoryId: 5, img: '../../assets/images/choco-haz-cake.avif', price: 5.99, description:'Chocolate and hazelnut cake with a side of whipped cream.'}
  ]
}

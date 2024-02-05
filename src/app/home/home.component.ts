import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  menu=[
    {
      title: 'Caprese Salad with Basil Pesto',
      description: 'Fresh tomatoes and buffalo mozzarella arranged in layers, accompanied by a homemade basil pesto. A simple but delicious combination that highlights the quality of the ingredients.',
      image: '../../assets/images/pesto-salad.avif'
    },
    {
      title: 'Grilled Salmon with Lemon and Herb Sauce, Accompanied by Garlic Mashed Potatoes',
      description: 'Juicy, smoky salmon fillet, grilled and topped with a light lemon sauce and fresh herbs. Garlic mashed potatoes add a creamy texture and comforting flavor to the dish.',
      image: '../../assets/images/grilled-salmon.jpg'
    },
    {
      title: 'Chocolate and Hazelnut Cake',
      description: 'A rich, moist chocolate cake with a creamy hazelnut filling and a smooth chocolate glaze. The perfect way to end a meal.',
      image: '../../assets/images/choco-haz-cake.avif'
    }
  ]
  recommendations = [
    {
      title: 'Pasta with Tomato and Basil',
      description: 'Classic Italian pasta dish made with fresh tomatoes, basil, and garlic. A simple yet flavorful combination that is sure to please.',
      image: '../../assets/images/pasta-tomato-basil.webp',
      price: 7
    },
    {
      title: 'Grilled Chicken with Lemon and Herbs',
      description: 'Juicy, tender chicken breast marinated in a zesty lemon and herb sauce, then grilled to perfection. A light and healthy option that is full of flavor.',
      image: '../../assets/images/grilled-chicken.jpg',
      price: 10
    },
    {
      title: 'Tiramisu',
      description: 'A classic Italian dessert made with layers of coffee-soaked ladyfingers and a rich, creamy mascarpone filling. A sweet and satisfying way to end a meal.',
      image: '../../assets/images/tiramisu.jpg',
      price: 5
    }
  ]
}

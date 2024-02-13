import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() title='';
  @Input() description='';
  @Input() image='';
  @Input() price=0;
  product: any;
  constructor(private _cartService:CartService) { }

  addToCart(name:string, price:number, description:string, image:string) {
    this.product={ name, price, description, image};
    this._cartService.addToCart(this.product);
  }
}

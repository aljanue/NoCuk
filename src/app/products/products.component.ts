import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() products: any[] = [];
  @Input() selectedCategory = 0;
  searchTerm = '';
  filteredProducts: any[] = [];

  ngOnChanges() {
    this.filteredProducts = this.products;

  }

  filterProducts() {
    if (this.searchTerm === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    console.log('soigñkusb');
  }
}


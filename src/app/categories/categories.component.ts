import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  @Input() categories: any[] = [];
  showCategories = false;
  toggleCategories(){
    this.showCategories = !this.showCategories;
  }

  @Output() categorySelected = new EventEmitter<number>();

  selectCategory(category: number) {
    this.categorySelected.emit(category);
  }
}

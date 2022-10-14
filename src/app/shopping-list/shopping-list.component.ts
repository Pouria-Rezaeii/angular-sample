import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[] = [];

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (newValue) => (this.ingredients = newValue)
    );
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}

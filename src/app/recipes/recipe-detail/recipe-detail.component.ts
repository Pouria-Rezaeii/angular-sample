import { Component, Input, OnInit } from '@angular/core';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  recipe?: Recipe;

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  onAddToShoppingList = () => {
    this.shoppingListService.addIngredientsFromRecipe(this.recipe!.ingredients);
  };
}

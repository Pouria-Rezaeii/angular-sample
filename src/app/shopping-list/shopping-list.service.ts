import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients = () => this.ingredients.slice();

  // when adding ingredients, the view doesn't get updated because in getIngredients we are
  // sending a copy to the component.
  // we can simply remove .slice() method or add a event emitter to let the component know about the change
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredients = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  };

  addIngredientsFromRecipe = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  };
}

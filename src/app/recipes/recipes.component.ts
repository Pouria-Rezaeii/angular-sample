import {
  AfterContentInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}
  selectedRecipe: Recipe | null = null;

  // also can be done directly in the template
  onRecipeSelected = (event: Recipe) => {
    this.selectedRecipe = event;
  };

  ngOnInit() {}
}

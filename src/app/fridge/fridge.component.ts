import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../ingredient';
import {IngredientsService} from '../ingredients.service';
import {Recipy} from '../recipy';
import {RecipiesService} from '../recipies.service';
import {IngredientsComponent} from '../ingredients/ingredients.component';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  selected: Ingredient[];
  notSelected: Ingredient[];
  recepiesList: Recipy[];

  constructor(private ingredientsService: IngredientsService, private recipiesService: RecipiesService) {}

  ngOnInit() {
    this.getRecipes();
    this.getIngredients();
    this.selected = [];
  }

  getRecipes() {
    this.recipiesService.getRecipies()
      .subscribe(recipies => (this.recepiesList = recipies));
  }

  getIngredients() {
    this.ingredientsService.getSelectedIngredients()
      .subscribe(ingredients => this.selected = ingredients);
    this.ingredientsService.getUnselectedIngredients()
      .subscribe(ingredients => this.notSelected = ingredients);
    this.getRecipes();
  }

  select(ingredient: Ingredient) {
    this.log('select callback of ' + ingredient.name);
    this.ingredientsService.selectIngredient(ingredient.id);
    this.getIngredients();
  }

  unselect(ingredient: Ingredient) {
    this.log('unselect callback of ' + ingredient.name);
    this.ingredientsService.unselectIngredient(ingredient.id);
    this.getIngredients();
  }

   private log(message: string) {
    console.log(message);
  }
}

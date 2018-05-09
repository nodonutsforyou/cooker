import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../ingredient';
import {IngredientsService} from '../ingredients.service';
import {Recipy} from '../recipy';
import {RecipiesService} from '../recipies.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

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
    this.ingredientsService.selectIngredient(ingredient.id);
    this.getIngredients();
  }

  unselect(ingredient: Ingredient) {
    this.ingredientsService.unselectIngredient(ingredient.id);
    this.getIngredients();
  }

}

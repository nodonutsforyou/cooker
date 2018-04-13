import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../ingredient';
import {IngredientsService} from '../ingredients.service';
import {RecipiesService} from '../recipies.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  selected: Ingredient[];
  notSelected: Ingredient[];

  constructor(private ingredientsService: IngredientsService, private  recipiesService: RecipiesService) {}

  ngOnInit() {
    this.getIngredients();
    this.selected = [];
  }

  getIngredients() {
    this.ingredientsService.getSelectedIngredients()
      .subscribe(ingredients => this.selected = ingredients);
    this.ingredientsService.getUnselectedIngredients()
      .subscribe(ingredients => this.notSelected = ingredients);
    this.recipiesService.updateIngredientsStatus();
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

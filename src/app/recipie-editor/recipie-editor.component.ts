import { Component, OnInit } from '@angular/core';


import {Ingredient} from '../ingredient';
import {IngredientsService} from '../ingredients.service';
import {Recipy} from '../recipy';
import {RecipiesService} from '../recipies.service';

@Component({
  selector: 'app-recipie-editor',
  templateUrl: './recipie-editor.component.html',
  styleUrls: ['./recipie-editor.component.css']
})
export class RecipieEditorComponent implements OnInit {

  public recipy: Recipy;
  public ingredients: Ingredient[];

  constructor(private ingredientsService: IngredientsService,
    private recipiesService: RecipiesService) {}

  ngOnInit() {
    this.ingredientsService.getAllIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }
  
  private log(message: string) {
    console.log(message);
  }

}

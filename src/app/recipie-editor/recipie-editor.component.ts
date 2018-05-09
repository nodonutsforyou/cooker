import {Component, OnInit} from '@angular/core';


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

  public recipy: Recipy = new Recipy();
  public ingredients: Ingredient[] = [];
  public allOtherIngredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService,
    private recipiesService: RecipiesService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientsService.getIngredientsFromRecipy(this.recipy)
      .subscribe(ingredients => {
        this.ingredients = ingredients;
      });
    this.ingredientsService.getIngredientsNotFromRecipy(this.recipy)
      .subscribe(ingredients => {
        this.allOtherIngredients = ingredients;
      });
  }

  private log(message: string) {
    console.log(message);
  }

  private unpickIngredient(ingr: Ingredient) {
    if (this.recipy.ingredients.indexOf(ingr.id) > -1) {
      const index = this.recipy.ingredients.indexOf(ingr.id);
      this.recipy.ingredients.splice(index, 1);
    }
    this.getIngredients();
  }

  private pickIngredient(ingr: Ingredient) {
    if (this.recipy.ingredients.indexOf(ingr.id) === -1 ) {
      this.recipy.ingredients.push(ingr.id);
    }
    this.getIngredients();
  }

}

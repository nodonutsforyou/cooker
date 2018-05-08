import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {Recipy} from './recipy';
import {IngredientsService} from './ingredients.service';

@Injectable()
export class RecipiesService {
  
  constructor(private ingredientsService: IngredientsService) {}

  private mockRecipies: Recipy[] = [
    {id: 1, name: 'Omlet', description: "get the eggs", haveIngredients: false, ingredients: [1]},
    {id: 2, name: 'Pasta', description: "get the pasta", haveIngredients: false, ingredients: [3, 7]},
    {id: 3, name: 'Chicken sote', description: "get the chicken", haveIngredients: false, ingredients: [5]},
  ];

  getRecipies(): Observable<Recipy[]> {
    for (const recipy of this.mockRecipies) {
      recipy.haveIngredients = this.hasComponents(recipy);
    }
    this.mockRecipies.sort((n1, n2) => {
      if (n1.haveIngredients === n2.haveIngredients) {
        return 0;
      }
      if (n1.haveIngredients === true) {
        return -1;
      }
      return 1;
    });
    console.log(this.mockRecipies);
    return of(this.mockRecipies);
  }

  hasComponents(recipy: Recipy): boolean {
    for (const ingr of recipy.ingredients) {
      if (!this.ingredientsService.isSelected(ingr)) {
        return false;
      }
    }
    return true;
  }


}

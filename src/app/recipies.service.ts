import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap, flatMap, mergeMap} from 'rxjs/operators';
import 'rxjs/add/operator/map';

import {Recipy} from './recipy';
import {IngredientsService} from './ingredients.service';

@Injectable()
export class RecipiesService {

  private recipiesUrl = 'api/recipies';  // URL to web api

  constructor(private ingredientsService: IngredientsService,
    private http: HttpClient) {
  }

  getRecipies(): Observable<Recipy[]> {
    const subscribeRecipy = this.http.get<Recipy[]>(this.recipiesUrl)
      .map(node => this.markIfRecipiesHaveIngredients(node)
        .sort((n1, n2) => this.sortIngredientsByHavingIngredients(n1, n2))
      );
    return subscribeRecipy;
  }

  markIfRecipiesHaveIngredients(recipies: Recipy[]): Recipy[] {
    for (const recipy of recipies) {
      recipy.haveIngredients = this.hasComponents(recipy);
    }
    return recipies;
  }

  sortIngredientsByHavingIngredients(i1: Recipy, i2: Recipy): number {
    if (i1.haveIngredients === i2.haveIngredients) {
      return 0;
    }
    if (i1.haveIngredients === true) {
      return -1;
    }
    return 1;
  }

  hasComponents(recipy: Recipy): boolean {
    for (const ingr of recipy.ingredients) {
      if (!this.ingredientsService.isSelected(ingr)) {
        return false;
      }
    }
    return true;
  }

  private log(message: string) {
    console.log(message);
  }


}

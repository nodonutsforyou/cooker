import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {Ingredient} from './ingredient';
import {Recipy} from './recipy';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class IngredientsService {

  private subscribeIngredients: Observable<Ingredient[]> = null;
  private ingredients: Ingredient[] = [];
  private isIngredientsListUpToDate = false;

  private ingredientsUrl = 'api/ingredients';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getAllIngredients(): Observable<Ingredient[]> {
    this.subscribeIngredients = this.http.get<Ingredient[]>(this.ingredientsUrl);
    this.subscribeIngredients.subscribe(ingredients => {
      this.ingredients = ingredients;
      this.isIngredientsListUpToDate = true;
    });
    return this.subscribeIngredients;
  }

  getIngredientsFromRecipy(r: Recipy) {
    if (this.isIngredientsListUpToDate) {
      const selected = this.ingredients.filter(i => r.ingredients.indexOf(i.id) > -1);
      return of(selected);
    }
    if (this.subscribeIngredients == null) {
      this.getAllIngredients();
    }
    return this.subscribeIngredients.map(obj => obj.filter(i => r.ingredients.indexOf(i.id) > -1));
  }

  getIngredientsNotFromRecipy(r: Recipy) {
    if (this.isIngredientsListUpToDate) {
      const selected = this.ingredients.filter(i => r.ingredients.indexOf(i.id) === -1);
      return of(selected);
    }
    if (this.subscribeIngredients == null) {
      this.getAllIngredients();
    }
    return this.subscribeIngredients.map(obj => obj.filter(i => r.ingredients.indexOf(i.id) === -1));
  }

  getSelectedIngredients(): Observable<Ingredient[]> {
    if (this.isIngredientsListUpToDate) {
      const selected = this.ingredients.filter(i => i.selected);
      return of(selected);
    }
    if (this.subscribeIngredients == null) {
      this.getAllIngredients();
    }
    return this.subscribeIngredients.map(obj => obj.filter(i => i.selected));
  }

  getUnselectedIngredients(): Observable<Ingredient[]> {
    if (this.isIngredientsListUpToDate) {
      const notSelected = this.ingredients.filter(i => !i.selected);
      return of(notSelected);
    }
    if (this.subscribeIngredients == null) {
      this.getAllIngredients();
    }
    return this.subscribeIngredients.map(obj => obj.filter(i => !i.selected));
  }

  selectIngredient(id: number) {
    this.ingredients.forEach(function(i) {
      if (i.id === id) {
        console.log('select ' + i.name);
        i.selected = true;
      }
    });
  }

  unselectIngredient(id: number) {
    this.ingredients.forEach(function(i) {if (i.id === id) {i.selected = false; } });
  }

  isSelected(id: number): Boolean {
    if (this.ingredients != null) {
      for (const ingr of this.ingredients) {
        if (ingr.id === id) {
          return ingr.selected;
        }
      }
    }
    return false;
  }

  private log(message: string) {
    console.log(message);
  }

}

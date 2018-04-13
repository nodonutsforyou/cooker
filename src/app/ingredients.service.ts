import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {Ingredient} from './ingredient';
import {RecipiesService} from './recipies.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class IngredientsService {

  private mockIngredients: Ingredient[] = [
    {id: 1, name: 'Eggs', selected: false},
    {id: 2, name: 'Apples', selected: false},
    {id: 3, name: 'Pasta', selected: false},
    {id: 4, name: 'Forcemeat', selected: false},
    {id: 5, name: 'Chiken', selected: false},
    {id: 6, name: 'Tomat', selected: false},
    {id: 7, name: 'Pesto', selected: false},
    {id: 8, name: 'Garlick', selected: false},
    {id: 9, name: 'Salt', selected: false},
    {id: 10, name: 'Pepper', selected: false}
  ];

  private ingredientsUrl = 'api/ingredients';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getAllIngredients(): Observable<Ingredient[]> {
    return of(this.mockIngredients);
  }

  getSelectedIngredients(): Observable<Ingredient[]> {
    const selected = this.mockIngredients.filter(obj => obj.selected);
    return of(selected);
  }

  getUnselectedIngredients(): Observable<Ingredient[]> {
    const unselected = this.mockIngredients.filter(obj => !obj.selected);
    return of(unselected);
  }

  selectIngredient(id: number) {
    this.mockIngredients.forEach(function (obj) {
      if (obj.id === id) {
        obj.selected = true;
      }
    });
  }

  unselectIngredient(id: number) {
    this.mockIngredients.forEach(function (obj) {
      if (obj.id === id) {
        obj.selected = false;
      }
    });
  }

  isSelected(id: number): Boolean {
    for (const ingr of this.mockIngredients) {
      if (ingr.id === id) {
        return ingr.selected;
      }
    }
    return false;
  }

  private log(message: string) {
  }

}

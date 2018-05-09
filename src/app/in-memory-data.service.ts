import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients = [
      {id: 1, name: 'Eggs', selected: false},
      {id: 2, name: 'Apples', selected: false},
      {id: 3, name: 'Pasta', selected: false},
      {id: 4, name: 'Forcemeat', selected: false},
      {id: 5, name: 'Chiken', selected: false},
      {id: 6, name: 'Tomat', selected: false},
      {id: 7, name: 'Pesto', selected: false},
      {id: 8, name: 'Garlick', selected: false},
      {id: 9, name: 'Salt', selected: false},
      {id: 10, name: 'Pepper', selected: false},
      {id: 11, name: 'Rosemarin', selected: false}
    ];
    const recipies = [
      {id: 1, name: 'Omlet', description: 'get the eggs', haveIngredients: false, ingredients: [1]},
      {id: 2, name: 'Pasta', description: 'get the pasta', haveIngredients: false, ingredients: [3, 7]},
      {id: 3, name: 'Chicken sote', description: 'get the chicken', haveIngredients: false, ingredients: [5]},
    ];
    return {ingredients, recipies};
  }
}

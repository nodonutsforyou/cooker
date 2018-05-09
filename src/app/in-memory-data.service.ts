import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients = [
      {id: 1, name: 'Eggs'},
      {id: 2, name: 'Apples'},
      {id: 3, name: 'Pasta'},
      {id: 4, name: 'Forcemeat'},
      {id: 5, name: 'Chiken'},
      {id: 6, name: 'Tomat'},
      {id: 7, name: 'Pesto'},
      {id: 8, name: 'Garlick'},
      {id: 9, name: 'Salt'},
      {id: 10, name: 'Pepper'},
      {id: 11, name: 'Rosemarin'}
    ];
    const recipies = [
      {id: 1, name: 'Omlet', description: "get the eggs", haveIngredients: false, ingredients: [1]},
      {id: 2, name: 'Pasta', description: "get the pasta", haveIngredients: false, ingredients: [3, 7]},
      {id: 3, name: 'Chicken sote', description: "get the chicken", haveIngredients: false, ingredients: [5]},
    ];
    return {ingredients, recipies};
  }
}

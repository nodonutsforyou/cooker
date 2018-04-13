import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients = [
      { id: 1, name: 'Eggs' },
      { id: 2, name: 'Apples' },
      { id: 3, name: 'Pasta' },
      { id: 4, name: 'Forcemeat' },
      { id: 5, name: 'Chiken' },
      { id: 6, name: 'Tomat' },
      { id: 7, name: 'Pesto' },
      { id: 8, name: 'Garlick' },
      { id: 9, name: 'Salt' },
      { id: 10, name: 'Pepper' }
    ];
    return {ingredients};
  }
}
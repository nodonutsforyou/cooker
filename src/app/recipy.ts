export class Recipy {
  id: number;
  name: string;
  description: string;
  haveIngredients: boolean;
  ingredients: number[];

  constructor() {
    this.ingredients = new Array<number>();
  }
}

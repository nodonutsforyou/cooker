import {Component, EventEmitter, OnInit, Input, Output  } from '@angular/core';

import {Ingredient} from '../ingredient';
import {IngredientsService} from '../ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredientsList: Ingredient[];
  @Output() picked = new EventEmitter<Ingredient>();

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
  }

  pick (ingredient: Ingredient) {
    this.log('test' + ingredient.name);
    this.picked.emit(ingredient);
  }

   private log(message: string) {
    console.log(message);
  }

}

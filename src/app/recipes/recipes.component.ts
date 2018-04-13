import { Component, OnInit } from '@angular/core';

import { Recipy } from '../recipy';
import {RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recepiesList: Recipy[];
  
  constructor(private recipiesService: RecipiesService) { }

  ngOnInit() {
    this.getRecipes();
  }
  
  getRecipes() {
    this.recipiesService.getRecipies()
    .subscribe(recipies => (this.recepiesList = recipies));
  }

}

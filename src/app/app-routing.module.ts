import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {RecipieEditorComponent} from './recipie-editor/recipie-editor.component';
import {FridgeComponent} from './fridge/fridge.component';
import {IngredientsComponent} from './ingredients/ingredients.component';

const routes: Routes = [
  { path: '', component: FridgeComponent },
  { path: 'edit', component: RecipieEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

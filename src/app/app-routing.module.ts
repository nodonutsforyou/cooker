import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipyDetailComponent} from './recipy-detail/recipy-detail.component';
import {IngredientsComponent} from './ingredients/ingredients.component';

const routes: Routes = [
  {path: '', component: IngredientsComponent},
  {path: 'recipe/:id', component: RecipyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

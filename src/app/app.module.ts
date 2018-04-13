import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {IngredientsService} from './ingredients.service';
import {RecipiesService} from './recipies.service';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipyDetailComponent} from './recipy-detail/recipy-detail.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    RecipesComponent,
    RecipyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),

    AppRoutingModule
  ],
  providers: [IngredientsService, RecipiesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

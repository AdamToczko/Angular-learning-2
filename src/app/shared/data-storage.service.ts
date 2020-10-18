import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) {}

  storeRecipes() {
    // get initial recipes
    const recipes = this.recipesService.getRecipes();
    console.log(recipes);
    // POST to add one, PUT to store all and override previous ones
    this.http
      .put('https://angular-recipes-5ac5f.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
    // this could be returned if we want to show the data in the component where we fetch it by subscribing to it in component which is not case here as header only has the buttons therefore we can subscribe to it here
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://angular-recipes-5ac5f.firebaseio.com/recipes.json')
      .pipe(
        // 1st map is from rxjs operators, second is just JS
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      );
    // with tap added above no longer need to subscribe but can return / in header though need to now subscribe
    // .subscribe(recipes => {
    //   this.recipesService.setRecipes(recipes);
    // });
  }
}

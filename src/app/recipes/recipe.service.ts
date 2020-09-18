import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: "root",
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "1 Test Recipe",
            "This is simply a test",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
        ),
        new Recipe(
            "2 Test Recipe",
            "This is simply a test",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
        ),
    ];

    constructor() {}

    getRecipes() {
        return this.recipes.slice();
    }
}
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
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

    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    constructor() {}

    ngOnInit() {}

    onSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}

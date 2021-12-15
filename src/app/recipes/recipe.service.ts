import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
        new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
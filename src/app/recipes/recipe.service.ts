import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1', 
            'This is simply a test 1', 
            'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('A Test Recipe 2', 
            'This is simply a test 2', 
            'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'A Test Recipe 3', 
            'This is simply a test 3', 
            'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg',
            [
                new Ingredient('Flour', 1),
                new Ingredient('Eggs', 3)
            ]),
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
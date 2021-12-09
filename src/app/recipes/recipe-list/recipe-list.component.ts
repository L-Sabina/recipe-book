import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
  ];

  

  constructor() { } 

  ngOnInit(): void {
  }
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

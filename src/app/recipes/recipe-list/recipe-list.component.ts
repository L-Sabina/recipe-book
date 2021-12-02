import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://eatsdelightful.com/wp-content/uploads/2020/11/cinnamon-swirl-wreath-bread-on-cutting-board.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

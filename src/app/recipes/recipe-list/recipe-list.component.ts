import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://i.ytimg.com/vi/pdFm9Rnz4H8/maxresdefault.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://i.ytimg.com/vi/pdFm9Rnz4H8/maxresdefault.jpg')
  ];

}

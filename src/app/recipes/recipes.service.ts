import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[]= [
    new Recipe ('The ultimate hamburger', 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg', 'what else to say?'),
    new Recipe ('Tinky Schnitzel', 'https://tinykitchentv.com/wp-content/uploads/2018/09/FI2-Schnitzel-Tiny-Kitchen-Big-Taste-1024x613.jpg', 'Jucy schnitzel')
  ]

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
}

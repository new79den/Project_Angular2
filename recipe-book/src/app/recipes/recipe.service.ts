import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
private  recipes: Recipe[] = [
  new Recipe("Schnitzel","Very tasty", "http://7listings.themes.7ad.in/phhk/files/2015/08/schnitzel.jpg", []),
  new Recipe("Summer Salad","Okayish", "http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg", []),
];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}

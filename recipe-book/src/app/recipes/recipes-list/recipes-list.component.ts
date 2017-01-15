import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from "../recipe";


@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Schnitzel","Very tasty", "http://7listings.themes.7ad.in/phhk/files/2015/08/schnitzel.jpg", []),
    new Recipe("Summer Salad","Okayish", "http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg", []),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);

  }
}

import { Component, OnInit, Input } from '@angular/core';

import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-detal',
  templateUrl: './recipe-detal.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() { }


  ngOnInit() {
  }

}

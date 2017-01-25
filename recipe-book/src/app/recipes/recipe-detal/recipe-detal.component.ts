import { Component, OnInit, Input } from '@angular/core';

import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import { Router } from '@angular/router';

@Component({
  selector: 'rb-recipe-detal',
  templateUrl: './recipe-detal.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  private recipeIndex : number = 1;

  constructor(private sls: ShoppingListService, private router: Router)
  {

  }

  ngOnInit() {

  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete(){
    this.router.navigate(['/recipes']);
  }


  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}

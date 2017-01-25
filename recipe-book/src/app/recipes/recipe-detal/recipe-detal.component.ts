import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detal',
  templateUrl: './recipe-detal.component.html',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  private recipeIndex : number;
  private subscriptin: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private  recipesServis: RecipeService
  ) {}

  ngOnInit() {
    this.subscriptin = this.route.params.subscribe(
      (params: any) =>{
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesServis.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete(){
    this.recipesServis.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }


  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(){
    this.subscriptin.unsubscribe();
  }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  private subscription: Subscription

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    let isNew = true;
    this.subscription = this.route.params.subscribe(
      (params: any) => {

        if(params.hasOwnProperty('id')){
          isNew = false;
          this.recipeIndex = +params['id'];
        }else{
          isNew = true;
        }
        console.log(isNew);
      }
    )
  }
ngOnDestroy(){
    this.subscription.unsubscribe();
}
}

import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Ingredient} from "../recipes/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) {
  }

ngOnChanges(changes){
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {name: null, amount: null};
    }else{
      this.isAdd = false;
    }
}

  onSubmit(ingredient: Ingredient) {
  const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
     this.sls.editItem(this.item, new Ingredient(ingredient.name, ingredient.amount));
    }else{
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }
}

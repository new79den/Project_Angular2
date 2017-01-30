import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../recipes/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
items: Ingredient[] = [];
selectedItem: Ingredient = null;
  constructor(private sls: ShoppingListService) {
    this.items = this.sls.getItems();

  }

  ngOnInit() {
  }

  onSelectItem(item: Ingredient){
    this.selectedItem = item;
  }

  onCleared(){
    this.selectedItem = null;
  }
}

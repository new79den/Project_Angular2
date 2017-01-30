import {Ingredient} from "../recipes/ingredient";

export class ShoppingListService {
private items: Ingredient[] = [];
  constructor() { }

  getItems(){

    return this.items;

  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient){
    this.items.push(item);
    console.log(this.items);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient){
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
}

import {Ingredient} from "./ingredient";
export class Recipe {
  constructor(public name, public descriptin, public imagePatch, public ingredients: Ingredient[]){}
}

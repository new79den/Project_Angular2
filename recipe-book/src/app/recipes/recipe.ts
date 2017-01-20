import {Ingredient} from "./ingredient";
export class Recipe {
  constructor(public name: string, public descriptin: string, public imagePatch: string, public ingredients: Ingredient[]){}
}

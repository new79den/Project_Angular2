import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Dummy","Dummy", "http://chelyabinsk.world-sewing-machines.ru/image/cache/data/Mydouble/Lady_valet-w-1100x1100.jpg");
  constructor() {}

  ngOnInit() {
  }

}

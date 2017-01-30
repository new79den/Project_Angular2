import {RouterModule} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detal/recipe-detal.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

export const RECIPES_ROUTES = [
  { path : '', component: RecipeStartComponent },
  { path : 'new', component: RecipeEditComponent },
  { path : ':id', component: RecipeDetailComponent },
  { path : ':id/edit', component: RecipeEditComponent }
];



import {RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListAddComponent} from "./shopping-list/shopping-list-add.component";
import { RECIPES_ROUTES } from "./recipes/recipes.routes"

const APP_ROUTES = [
  { path : '', redirectTo: '/recipes', pathMatch: 'full' },
  { path : 'recipes', component: RecipesComponent, children: RECIPES_ROUTES},
  { path : 'shopping-list', component: ShoppingListAddComponent },
];

export const routing  = RouterModule.forRoot(APP_ROUTES);

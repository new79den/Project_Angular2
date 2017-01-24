import {RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListAddComponent} from "./shopping-list/shopping-list-add.component";


const APP_ROUTES = [
  { path : '', redirectTo: '/recipes', pathMatch: 'full' },
  { path : 'recipes', component: RecipesComponent },
  { path : 'shopping-list', component: ShoppingListAddComponent },
];

export const routing  = RouterModule.forRoot(APP_ROUTES);

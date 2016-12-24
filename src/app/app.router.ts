
import {ItemsTableComponent} from "./items-table/items-table.component";
import {RouterModule} from "@angular/router";
import {FavoritesTableComponent} from "./favorites-table/favorites-table.component";


const routes = [
  {path: '', component: ItemsTableComponent},
  {path: 'favorites', component: FavoritesTableComponent}
]


export default RouterModule.forRoot(routes);

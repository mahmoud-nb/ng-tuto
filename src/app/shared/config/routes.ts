import {Routes} from "@angular/router";
import {ProductsListComponent} from "../../products/products-list/products-list.component";
import {ProductDetailsComponent} from "../../products/product-details/product-details.component";


export const routes: Routes = [
  { path: '', redirectTo: "products", pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent},
  { path: 'product-details', component: ProductDetailsComponent},

];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import {TruncatePipe} from "../shared/pipes/truncate.pipe";
import { ProductDetailsComponent } from './product-details/product-details.component';

import { RouterModule } from "@angular/router";
import { routes } from "../shared/config/routes";
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ProductsListComponent
  ],
  declarations: [
    ProductsListComponent,
    ProductsItemComponent,
    TruncatePipe,
    ProductDetailsComponent,
    AddProductComponent
  ]
})
export class ProductsModule { }

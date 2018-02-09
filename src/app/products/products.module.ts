import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import {TruncatePipe} from "../shared/pipes/truncate.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent
  ],
  declarations: [
    ProductsListComponent,
    ProductsItemComponent,
    TruncatePipe
  ]
})
export class ProductsModule { }

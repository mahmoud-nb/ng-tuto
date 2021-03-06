import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './shared/services/products.service';
import { RouterModule } from "@angular/router";
import { routes } from "./shared/config/routes";

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

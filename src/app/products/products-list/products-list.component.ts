import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../shared/services/products.service";
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:Product[] = [];
  facoriteItems: number = 0;

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe( res => {
      this.products = res;
      this.getFavoriteNbr();
    });
  }


  getFavoriteNbr():void {
    this.facoriteItems = this.products.filter(el => el.favorite === true ).length ;
  }


  onFavoriteChange(product:Product):void {
    ///this.products.map( el =>  el.id === product.id ? product : el );

    // [1][2][3]

    let p:Product = this.products.find(el => el.id === product.id );
    p.favorite = product.favorite ;
    this.getFavoriteNbr();
  }

}

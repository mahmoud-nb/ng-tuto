import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  cartNbr:number;

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService._cartNbr$.subscribe( nb => this.cartNbr = nb );
  }

}

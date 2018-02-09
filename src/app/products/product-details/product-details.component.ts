import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product = null;

  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('###', params);
      //this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    //this.productsService.getSelectedProduct$().subscribe( res => this.product = res );

    this.productsService.selectedProduct$.subscribe( res => this.product = res );

  }

}

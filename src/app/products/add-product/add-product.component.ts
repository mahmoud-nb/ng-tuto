import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../shared/services/products.service";
import {Router} from "@angular/router";
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName:string = "Hello world";

  rForm: FormGroup;

  constructor(
    private  fb: FormBuilder,
    private productsService:ProductsService,
    private router: Router
  ) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'price': [null, Validators.compose([Validators.required, Validators.pattern("[0-9]*")])], //
      'description': [null, Validators.compose([Validators.required, Validators.minLength(20)])],
    });
  }

  ngOnInit() {
    //
  }


  addProduct(formValue) {
    console.log('add Product', formValue );

    let product:Product = {
      id: null,
      name: formValue.name,
      price: Number(formValue.price) ,
      description: formValue.description,
      image: 'assets/img/dummyimg.png',
      category: null,
      favorite: false
    };

    this.productsService.addProduct(product);

    this.router.navigate([ '/products' ]);
  }

}

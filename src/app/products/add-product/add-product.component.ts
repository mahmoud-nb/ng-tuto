import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName:string = "Hello world";

  rForm: FormGroup;

  constructor(private  fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'price': [null, Validators.compose([Validators.required, Validators.pattern("[0-9]*")])], //
      'description': [null, Validators.compose([Validators.required, Validators.minLength(20)])],
    });
  }

}

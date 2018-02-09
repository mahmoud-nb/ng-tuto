import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {


  _cartNbr$ = new BehaviorSubject<number>(0);
  private _selectedProduct$ = new BehaviorSubject<Product>(null);
  //_products$ = new BehaviorSubject<Product[]>([]);


  products:Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Huawei",
        description: "Ptional dismiss button in tional dismiss button in",
        image: "assets/img/dummyimg.png",
        price: 38,
        category: "Mobile",
        favorite: true
      },
      {
        id: 2,
        name: "Samsung Node8",
        description: "Ptional dismiss button in tional dismiss button in",
        image: "assets/img/dummyimg.png",
        price: 32,
        category: "Mobile",
        favorite: false
      },
      {
        id: 3,
        name: "Nokia",
        description: "Ptional dismiss button in tional dismiss button in",
        image: "assets/img/dummyimg.png",
        price: 48,
        category: "Mobile",
        favorite: true
      }
    ];
  }

  incCartNbr(): void {
    let currentCartNbr = this._cartNbr$.getValue();
    this._cartNbr$.next(++currentCartNbr);
  }

  // set selectedProduct$(product:Product):void{
  //   this._selectedProduct$.next(product);
  // }

  get selectedProduct$(): Observable<Product>{
    return this._selectedProduct$;
  }

  setSelectedProduct$(product:Product):void{
    this._selectedProduct$.next(product);
  }

  getSelectedProduct$(): BehaviorSubject<Product>{
    return this._selectedProduct$;
  }




  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }

}

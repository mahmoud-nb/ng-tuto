import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ProductsService} from "../../shared/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  defaulttruncateLimit: number = 40;
  truncateLimit: number;

  @Input() product:Product = null;
  @Output() onFavoriteChange = new EventEmitter<Product>();

  constructor(
    private productsService:ProductsService,
    private router: Router
              ) {
    this.truncateLimit = this.defaulttruncateLimit;
  }

  ngOnInit() {
  }



  showMore():boolean {
    this.truncateLimit = this.truncateLimit === this.defaulttruncateLimit ? null : this.defaulttruncateLimit ;
    return this.truncateLimit === this.defaulttruncateLimit ;
  }

  toggleFavorite():void {
    this.product.favorite = !this.product.favorite;
    this.onFavoriteChange.emit(this.product);
  }

  addToCart():void {
    this.productsService.incCartNbr();
  }

  setCurrentProduct():void {
   this.productsService.setSelectedProduct$(this.product);

    this.router.navigate(['/product-details']);
    //this.productsService.selectedProduct$ = this.product ;
  }

}

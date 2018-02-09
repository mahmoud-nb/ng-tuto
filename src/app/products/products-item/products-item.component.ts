import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/models/product";

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

  constructor() {
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

}

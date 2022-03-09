import { Component, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productList.push(new Product(101,"Dell Inspiron 5379","Laptop",true));
    this.productList.push(new Product(102,"Dell Inspiron 7359","Laptop",false));
  }

}

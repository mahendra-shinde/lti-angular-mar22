import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product(0,"product-name","product-description",true) ;

  productIdCtl : FormControl  = new FormControl(this.product.productId, 
      [Validators.required, Validators.min(100) ]);

  constructor() { }

  save(prd:Product):void {
    console.log("Product being saved "+prd.name);
  }
  ngOnInit(): void {
  }

}

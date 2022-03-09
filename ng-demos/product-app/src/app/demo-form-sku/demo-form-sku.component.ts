import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {
  
  productName: string = "";

  constructor(){     
  }
  ngOnInit(): void {
    
  }

  onSubmit(form: any):void {
    console.log("You submitted value: "+form);
  }

}

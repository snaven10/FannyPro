import { Component, OnInit } from '@angular/core';
import { vendors } from './../../../../_model/product.model';
import { ProductService } from './../../../../_service/product/product.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent  implements OnInit{
  dataSource: vendors[];
  displayedColumns: string[] = ['vendorname', 'price', 'warrantyvalidity', 'quantity'];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.ProductService.getvendors();
  }

} 

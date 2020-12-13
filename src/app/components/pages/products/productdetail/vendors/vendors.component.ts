import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/components/_model/vendor.model';
import { ProductService } from './../../../../_service/product/product.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent  implements OnInit{
  dataSource: Vendor[];
  displayedColumns: string[] = ['vendorname', 'price', 'warrantyvalidity', 'quantity'];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.ProductService.getvendors();
  }

}

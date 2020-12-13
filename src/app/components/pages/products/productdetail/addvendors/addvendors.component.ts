import { ProductService } from 'src/app/components/_service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vendor } from 'src/app/components/_model/vendor.model';

@Component({
  selector: 'app-button-addvendors',
  templateUrl: './button.component.html'
})
export class AddvendorsComponent {

  constructor(public dialog: MatDialog) { }
  openadd(): void {
    this.dialog.open(Addvendors, {
      width: '50%'
    });
  }

}

@Component({
  selector: 'app-addvendors',
  templateUrl: './addvendors.component.html',
  styleUrls: ['./addvendors.component.scss']
})

export class Addvendors implements OnInit {
  vendors: Vendor;
  constructor(private ProductService: ProductService){}
  ngOnInit(){
    this.vendors = this.ProductService.newvendor();
  }

  newvendor(): void {
    this.ProductService.addvendors(this.vendors);
    this.vendors = this.ProductService.newvendor();
    console.log(this.ProductService.getvendors());
  }
}

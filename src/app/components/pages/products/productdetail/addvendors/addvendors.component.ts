import { ProductService } from 'src/app/components/_service/product/product.service';
import { vendors } from './../../../../_model/product.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  vendors: vendors;
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

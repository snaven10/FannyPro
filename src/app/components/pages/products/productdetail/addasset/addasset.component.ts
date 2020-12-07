import { asset } from './../../../../_model/product.model';
import { ProductService } from './../../../../_service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button-addasset',
  templateUrl: './button.component.html'
})
export class AddassetComponent {

  constructor(public dialog: MatDialog) { }
  openadd(): void {
    this.dialog.open(Addasset, {
      width: '50%'
    });
  }

}

@Component({
  selector: 'app-addvendors',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.scss']
})

export class Addasset implements OnInit {
  asset: asset;
  constructor(private ProductService: ProductService){}
  ngOnInit(){
    this.asset = this.ProductService.newasset();
  }

  newasset(): void {
    this.ProductService.addasset(this.asset);
    this.asset = this.ProductService.newasset();
    console.log(this.ProductService.getasset());
  }
}

import { ProductService } from 'src/app/components/_service/product/product.service';
import { SubcategorieService } from 'src/app/components/_service/subcategorie/subcategorie.service';
import { product } from './../../../_model/product.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { subcategorie } from 'src/app/components/_model/sub.categorie.model';

@Component({
  selector: 'app-button-addproduct',
  templateUrl: '../../button.component.html'
})
export class AddproductComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(Addproduct, {
      width: '20%'
    });
  }
}


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

export class Addproduct implements OnInit {
  product: product;
  subcategorie: subcategorie[];

  constructor(private ProductService: ProductService, private SubcategorieService: SubcategorieService) {}
  
  ngOnInit() {
    this.product = this.ProductService.newproduct();
    this.subcategorie = this.SubcategorieService.getsubCategory();
  }

  newsubProduct(): void {
    this.ProductService.addproduct(this.product);
    this.product = this.ProductService.newproduct();
  }
}
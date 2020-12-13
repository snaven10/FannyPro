import { ProductService } from 'src/app/components/_service/product/product.service';
import { Product } from './../../../_model/product.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { subCategory } from 'src/app/components/_model/subCategory.model';
import { SubCategoryService } from 'src/app/components/_service/category/subCategory.service';

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
  product: Product;
  subcategorie: subCategory[];

  constructor(private ProductService: ProductService, private subcategorieService: SubCategoryService) {}

  ngOnInit() {
    this.product = this.ProductService.newproduct();
    this.subcategorie = this.subcategorieService.getsubCategory();
  }

  newsubProduct(): void {
    this.ProductService.addproduct(this.product);
    this.product = this.ProductService.newproduct();
  }
}

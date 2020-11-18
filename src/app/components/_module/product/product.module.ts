import { SubcategorieService } from 'src/app/components/_service/subcategorie/subcategorie.service';
import { FormsModule } from '@angular/forms';
import { Addproduct, AddproductComponent } from './../../pages/products/addproduct/addproduct.component';
import { ViewproductComponent } from './../../pages/products/viewproduct/viewproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ProductService } from '../../_service/product/product.service';

@NgModule({
  declarations: [
    AddproductComponent,
    ViewproductComponent,
    Addproduct
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AddproductComponent,
    ViewproductComponent,
    Addproduct
  ],
  providers: [
    SubcategorieService,
    ProductService
  ]
})
export class ProductModule { }

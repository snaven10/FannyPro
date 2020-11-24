import { SubcategorieService } from 'src/app/components/_service/subcategorie/subcategorie.service';
import { FormsModule } from '@angular/forms';
import { Addproduct, AddproductComponent } from './../../pages/products/addproduct/addproduct.component';
import { ViewproductComponent } from './../../pages/products/viewproduct/viewproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ProductService } from '../../_service/product/product.service';
import { DetailComponent } from '../../pages/products/productdetail/detail/detail.component';
import { OverviewComponent } from '../../pages/products/productdetail/overview/overview.component';
import { VendorsComponent } from '../../pages/products/productdetail/vendors/vendors.component';
import { AssociatedassetsComponent } from '../../pages/products/productdetail/associatedassets/associatedassets.component';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  declarations: [
    AddproductComponent,
    ViewproductComponent,
    Addproduct,
    //product content detail
    DetailComponent,
    //page content product detail
    OverviewComponent,
    VendorsComponent,
    AssociatedassetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    AddproductComponent,
    ViewproductComponent,
    Addproduct,
    DetailComponent
  ],
  providers: [
    SubcategorieService,
    ProductService
  ]
})
export class ProductModule { }

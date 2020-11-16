import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieService } from '../../_service/categorie/categorie.service';
import { AddcategorieComponent } from '../../pages/categories/addcategorie/addcategorie.component';
import { FormsModule } from '@angular/forms';
import { ViewcategorieComponent } from '../../pages/categories/viewcategorie/viewcategorie.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    AddcategorieComponent,
    ViewcategorieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ViewcategorieComponent
  ],
  providers: [
    CategorieService
  ]
})
export class CategorieModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddsubcategorieComponent, AddsubCategory } from '../../pages/subcategories/addsubcategorie/addsubcategorie.component';
import { ViewsubcategorieComponent } from '../../pages/subcategories/viewsubcategorie/viewsubcategorie.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { SubcategorieService } from '../../_service/subcategorie/subcategorie.service';
import { CategorieService } from '../../_service/categorie/categorie.service';



@NgModule({
  declarations: [
    AddsubcategorieComponent,
    ViewsubcategorieComponent,
    AddsubCategory
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AddsubcategorieComponent,
    ViewsubcategorieComponent
  ],
  providers: [
    SubcategorieService,
    CategorieService
  ]
})
export class SubcategorieModule { }

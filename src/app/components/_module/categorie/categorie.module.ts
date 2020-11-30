import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieService } from '../../_service/categorie/categorie.service';
import { AddcategorieComponent, AddCategorie } from '../../pages/categories/addcategorie/addcategorie.component';
import { FormsModule } from '@angular/forms';
import { ViewcategorieComponent } from '../../pages/categories/viewcategorie/viewcategorie.component';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule } from '../../app/app-routing.module';



@NgModule({
  declarations: [
    AddcategorieComponent,
    ViewcategorieComponent,
    AddCategorie
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ViewcategorieComponent,
    AddcategorieComponent

  ],
  providers: [
    CategorieService
  ]
})
export class CategorieModule { }

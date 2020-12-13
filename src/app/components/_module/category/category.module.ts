import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule } from '../../app/app-routing.module';
import { AddCategory, AddCategoryComponent } from '../../pages/categories/addCategories/addCategories.component';
import { ViewCategoriesComponent } from '../../pages/categories/viewCategories/viewCategories.component';
import { CategoryService } from '../../_service/category/category.service';



@NgModule({
  declarations: [
    AddCategoryComponent,
    ViewCategoriesComponent,
    AddCategory
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ViewCategoriesComponent,
    AddCategoryComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }

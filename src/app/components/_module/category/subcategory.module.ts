import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { CategoryService } from '../../_service/category/category.service';
import { AddSubCategoriesComponent, AddsubCategory } from '../../pages/categories/subCategory/addSubCategory/addSubCategory.component';
import { ViewSubCategoriesComponent } from '../../pages/categories/subCategory/viewSubCategory/viewSubCategories.component';
import { SubCategoryService } from '../../_service/category/subCategory.service';


@NgModule({
  declarations: [
    AddsubCategory,
    ViewSubCategoriesComponent,
    AddsubCategory,
    ViewSubCategoriesComponent,
    AddSubCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ViewSubCategoriesComponent,
    ViewSubCategoriesComponent
  ],
  providers: [
    SubCategoryService,
    CategoryService
  ]
})
export class SubCategoriesModule { }

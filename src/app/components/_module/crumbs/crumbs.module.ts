import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { BreadcrumbsOptionOneComponent } from '../../navigations/crumbs/breadcrumbs-option-one/breadcrumbs-option-one.component';
import { BreadcrumbsOptionTwoComponent } from '../../navigations/crumbs/breadcrumbs-option-two/breadcrumbs-option-two.component';



@NgModule({
  declarations: [
    BreadcrumbsOptionOneComponent,
    BreadcrumbsOptionTwoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BreadcrumbsOptionOneComponent,
    BreadcrumbsOptionTwoComponent

  ],
  providers: [

  ]
})
export class CrumbsModule { }

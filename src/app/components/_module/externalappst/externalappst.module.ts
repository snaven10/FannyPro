import { ExternalappstComponent } from './../../pages/externalappst/externalappst.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ExternalappstComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:  [
    ExternalappstComponent
  ],
  providers:  [

  ]
})
export class ExternalappstModule { }

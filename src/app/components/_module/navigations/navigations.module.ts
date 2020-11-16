import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ContentComponent } from '../../navigations/content/content.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from '../../navigations/menu/menu.component';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  declarations: [
    ContentComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    ContentComponent
  ],
  providers: [
  ]
})
export class NavigationsModule { }

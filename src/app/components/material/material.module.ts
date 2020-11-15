import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
//menu
import { MatMenuModule } from '@angular/material/menu'; 
//icons fontawesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//icons material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//notificaciones
import { MatBadgeModule } from '@angular/material/badge'; 
//import tables
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
//card
import { MatCardModule } from '@angular/material/card'; 

//form fiel
import { MatFormFieldModule } from '@angular/material/form-field'; 

import { MatGridListModule } from '@angular/material/grid-list'; 

import { MatCheckboxModule } from '@angular/material/checkbox'; 

const MaterialComponents = [
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  FontAwesomeModule,
  MatBadgeModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatGridListModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

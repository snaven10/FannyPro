import { NgModule } from '@angular/core';
//en uso
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


//corrigiendo
import { MatButtonModule } from '@angular/material/button';
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
  //en uso
  MatSidenavModule,
  MatToolbarModule,
  //to davia no
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  FontAwesomeModule,
  MatBadgeModule,
  MatButtonModule,
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

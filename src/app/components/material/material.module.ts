import { NgModule } from '@angular/core';
//en uso
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 
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

import { MatGridListModule } from '@angular/material/grid-list'; 

import { MatCheckboxModule } from '@angular/material/checkbox'; 

const MaterialComponents = [
  //en uso
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  FontAwesomeModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  //to davia no
  MatCheckboxModule,
  MatBadgeModule,
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

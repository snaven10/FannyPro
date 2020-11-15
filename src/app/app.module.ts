import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';
import { ProductsComponent } from './components/inventory/products/products.component';
import { ProductsdetallsComponent } from './components/inventory/productsdetalls/productsdetalls.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/inventory/productdetailpages/overview/overview.component';
import { RelationshipsComponent } from './components/inventory/productdetailpages/relationships/relationships.component';
import { RequestsComponent } from './components/inventory/productdetailpages/requests/requests.component';
import { ContractsComponent } from './components/inventory/productdetailpages/contracts/contracts.component';
import { ActivityComponent } from './components/inventory/productdetailpages/activity/activity.component';
import { InvoiceComponent } from './components/invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubcategoriesComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductsdetallsComponent,
    DashboardComponent,
    OverviewComponent,
    RelationshipsComponent,
    RequestsComponent,
    ContractsComponent,
    ActivityComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

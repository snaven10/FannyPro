import { ViewproductComponent } from './../pages/products/viewproduct/viewproduct.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from '../pages/products/productdetail/detail/detail.component';
import { OverviewComponent } from '../pages/products/productdetail/overview/overview.component';
import { VendorsComponent } from '../pages/products/productdetail/vendors/vendors.component';
import { AssociatedassetsComponent } from '../pages/products/productdetail/associatedassets/associatedassets.component';
import { ViewSubCategoriesComponent } from '../pages/categories/subCategory/viewSubCategory/viewSubCategories.component';
import { ViewCategoriesComponent } from '../pages/categories/viewCategories/viewCategories.component';

const routes: Routes = [/*
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },*/
  {
    path: 'categories',
    component: ViewCategoriesComponent
  },
  {
    path: 'sub-categories',
    component: ViewSubCategoriesComponent
  },
  {
    path: 'products',
    component: ViewproductComponent
  },
  {
    path: 'productsdetalls',
    component: DetailComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'vendors',
        component: VendorsComponent
      },
      {
        path: 'associatedassets',
        component: AssociatedassetsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    paramsInheritanceStrategy: 'always',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

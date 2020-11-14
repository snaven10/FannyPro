import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { SubcategoriesComponent } from '../subcategories/subcategories.component';
import { ProductsComponent } from '../inventory/products/products.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductsdetallsComponent } from '../inventory/productsdetalls/productsdetalls.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sub-categories',
    component: SubcategoriesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'productsdetalls',
    component: ProductsdetallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    paramsInheritanceStrategy: 'always',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

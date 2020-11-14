import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { SubcategoriesComponent } from '../subcategories/subcategories.component';
import { ProductsComponent } from '../inventory/products/products.component';

const routes: Routes = [
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

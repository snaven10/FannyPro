import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { SubcategoriesComponent } from '../subcategories/subcategories.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sub-categories',
    component: SubcategoriesComponent
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

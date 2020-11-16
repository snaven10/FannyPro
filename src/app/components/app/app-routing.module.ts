import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcategorieComponent } from '../pages/categories/viewcategorie/viewcategorie.component';
/*import { CategoriesComponent } from '../categories/categories.component';
import { SubcategoriesComponent } from '../subcategories/subcategories.component';
import { ProductsComponent } from '../inventory/products/products.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductsdetallsComponent } from '../inventory/productsdetalls/productsdetalls.component';
import { OverviewComponent } from '../inventory/productdetailpages/overview/overview.component';
import { ActivityComponent } from '../inventory/productdetailpages/activity/activity.component';
import { ContractsComponent } from '../inventory/productdetailpages/contracts/contracts.component';
import { RequestsComponent } from '../inventory/productdetailpages/requests/requests.component';
import { RelationshipsComponent } from '../inventory/productdetailpages/relationships/relationships.component';*/

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
    component: ViewcategorieComponent
  }/*,
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
    component: ProductsdetallsComponent,
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
        path: 'relationships',
        component: RelationshipsComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'contracts',
        component: ContractsComponent
      },
      {
        path: 'activity',
        component: ActivityComponent
      }
    ]
  }
*/];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    paramsInheritanceStrategy: 'always',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ProductModule } from './components/_module/product/product.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { NavigationsModule } from './components/_module/navigations/navigations.module';
import { AddassetComponent } from './components/pages/products/productdetail/addasset/addasset.component';
import { CategoriesModule } from './components/_module/category/category.module';
import { SubCategoriesModule } from './components/_module/category/subcategory.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddassetComponent,
  ],
  imports: [
    NavigationsModule,
    CategoriesModule,
    SubCategoriesModule,
    ProductModule,
    HttpClientModule
  ],
  providers: [





  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

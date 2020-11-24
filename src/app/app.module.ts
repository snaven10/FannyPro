import { ProductModule } from './components/_module/product/product.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { NavigationsModule } from './components/_module/navigations/navigations.module';
import { CategorieModule } from './components/_module/categorie/categorie.module';
import { SubcategorieModule } from './components/_module/subcategorie/subcategorie.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavigationsModule,
    CategorieModule,
    SubcategorieModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

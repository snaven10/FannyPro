import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { NavigationsModule } from './components/_module/navigations/navigations.module';
import { CategorieModule } from './components/_module/categorie/categorie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NavigationsModule,
    CategorieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

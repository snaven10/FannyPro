import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { NavigationsModule } from './components/_module/navigations/navigations.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NavigationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

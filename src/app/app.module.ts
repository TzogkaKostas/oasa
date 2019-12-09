import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GlobalComponent } from './global/global.component';
import { AmeaComponent } from './amea/amea.component';
import { SixnesErotiseisComponent } from './sixnes-erotiseis/sixnes-erotiseis.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    GlobalComponent,
    AmeaComponent,
    SixnesErotiseisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

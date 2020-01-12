import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GlobalComponent } from './global/global.component';
import { AmeaComponent } from './amea/amea.component';
import { SixnesErotiseisComponent } from './sixnes-erotiseis/sixnes-erotiseis.component';
import { HttpService } from './services/http.service';
import { TimesEisitirionComponent } from './times-eisitirion/times-eisitirion.component';
import { ErotimatologioComponent } from './erotimatologio/erotimatologio.component';
import { OrarioLeitourgiasComponent } from './orario-leitourgias/orario-leitourgias.component';
import { FormaParapononComponent } from './forma-paraponon/forma-paraponon.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EvresiDiadromisComponent } from './evresi-diadromis/evresi-diadromis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuxterinaComponent } from './nuxterina/nuxterina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolesthentaComponent } from './apolesthenta/apolesthenta.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AgoraEisitirwnComponent } from './agora-eisitirwn/agora-eisitirwn.component';
import { SuccessSubmitComponent } from './success-submit/success-submit.component';
import { FortisiKartasComponent } from './fortisi-kartas/fortisi-kartas.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    GlobalComponent,
    AmeaComponent,
    SixnesErotiseisComponent,
    TimesEisitirionComponent,
    ErotimatologioComponent,
    OrarioLeitourgiasComponent,
    FormaParapononComponent,
    EvresiDiadromisComponent,
    NuxterinaComponent,
    ApolesthentaComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AgoraEisitirwnComponent,
    SuccessSubmitComponent,
    FortisiKartasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

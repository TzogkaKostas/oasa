import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AmeaComponent } from './amea/amea.component';
import { SixnesErotiseisComponent } from './sixnes-erotiseis/sixnes-erotiseis.component';
import { TimesEisitirionComponent } from './times-eisitirion/times-eisitirion.component';
import { ErotimatologioComponent } from './erotimatologio/erotimatologio.component';
import { OrarioLeitourgiasComponent } from './orario-leitourgias/orario-leitourgias.component';
import { FormaParapononComponent } from './forma-paraponon/forma-paraponon.component';
import { EvresiDiadromisComponent } from './evresi-diadromis/evresi-diadromis.component';
import { NuxterinaComponent } from './nuxterina/nuxterina.component';
import { ApolesthentaComponent } from './apolesthenta/apolesthenta.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { SuccessSubmitComponent } from './success-submit/success-submit.component';
import { AgoraEisitirwnComponent } from './agora-eisitirwn/agora-eisitirwn.component';
import { ShmeiaEkdosisOdikesComponent } from './shmeia-ekdosis-odikes/shmeia-ekdosis-odikes.component';
import { PlhroforiesComponent } from './plhrofories/plhrofories.component';
import { StaseisComponent } from './staseis/staseis.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'amea', component: AmeaComponent },
  { path: 'sixneserotiseis', component: SixnesErotiseisComponent },
  { path: 'times/:id', component: TimesEisitirionComponent },
  { path: 'erotimatologio', component: ErotimatologioComponent },
  { path: 'orario', component: OrarioLeitourgiasComponent },
  { path: 'parapona', component: FormaParapononComponent },
  { path: 'nuxterina', component: NuxterinaComponent },
  { path: 'diadromi/:from/:to', component: EvresiDiadromisComponent},
  { path: 'apolesthenta', component: ApolesthentaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'user', component: UserComponent},
  { path: 'agora', component: AgoraEisitirwnComponent },
  { path: 'success_submit', component: SuccessSubmitComponent },
  { path: 'shmeia-ekdosis/:id', component: ShmeiaEkdosisOdikesComponent },
  { path: 'plhrofories/:id', component: PlhroforiesComponent },
  { path: 'plhrofories/:id/:id2', component: PlhroforiesComponent },
  { path: 'staseis/:id', component: StaseisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

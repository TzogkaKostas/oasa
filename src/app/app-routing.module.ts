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

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'amea', component: AmeaComponent },
  { path: 'sixneserotiseis', component: SixnesErotiseisComponent },
  { path: 'times', component: TimesEisitirionComponent },
  { path: 'erotimatologio', component: ErotimatologioComponent },
  { path: 'orario', component: OrarioLeitourgiasComponent },
  { path: 'parapona', component: FormaParapononComponent },
  { path: 'nuxterina', component: NuxterinaComponent },
  { path: 'diadromi/:from/:to', component: EvresiDiadromisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

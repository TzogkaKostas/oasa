import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AmeaComponent } from './amea/amea.component';
import { SixnesErotiseisComponent } from './sixnes-erotiseis/sixnes-erotiseis.component';


const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'amea', component: AmeaComponent },
  { path: 'sixneserotiseis', component: SixnesErotiseisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

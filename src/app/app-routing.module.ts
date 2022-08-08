import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseillersComponent } from './conseillers/conseillers.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IdConseillerComponent } from './id-conseiller/id-conseiller.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path :'Id-Conseiller' , component: IdConseillerComponent},
  {path : 'Conseillers' , component : ConseillersComponent},
  {path : 'Test' , component : TestComponent},
  {path : 'Accueil' , component : AccueilComponent},

  {path : '**' , component : AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

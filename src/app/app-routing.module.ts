import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PazienteComponent } from './paziente/paziente.component';
import { EsameComponent } from './esame/esame.component';
import { DottoreComponent } from './dottore/dottore.component';

const routes: Routes = [
  {
    path: 'paziente',
    component: PazienteComponent,
  },
  {
    path: 'esame',
    component: EsameComponent,
  },
  {
    path: 'dottore',
    component: DottoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

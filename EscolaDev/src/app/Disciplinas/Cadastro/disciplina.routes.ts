import { Routes, Router, RouterModule } from '@angular/router';

import { DisciplinasComponent } from './disciplinas.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DisciplinasComponent },
  { path: 'Disciplina', component: DisciplinasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisciplinaRoutes {}

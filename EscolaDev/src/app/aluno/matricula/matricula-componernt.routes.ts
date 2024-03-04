import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { MatriculaComponent } from './matricula.component';
const routes: Routes = [
  { path: '', component: MatriculaComponent },
  { path: 'Alunos/matriculas', component: MatriculaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculaRoutesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorDisciplinaComponent } from './professor-disciplina.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorDisciplinaComponent,
  },
  {
    path: 'Professor/Vircular-Disciplina',
    component: ProfessorDisciplinaComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorDisciplinaRutesModule {}

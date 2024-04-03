import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProfessorDisciplinaComponent } from './professor-disciplina/professor-disciplina.component';
import { CadastroProfessorComponent } from './Cadastro/cadastro.component';

const routes: Routes = [
  {
    path: 'Professor/Vircular-Disciplina',
    component: ProfessorDisciplinaComponent,
  },
  {
  path: 'Professor/Cadastrados',
  component: CadastroProfessorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProfessorRoutes {}

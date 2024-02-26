import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

const routes: Routes = [
  { path: '', component: ListarAlunoComponent },
  { path: 'Alunos/cadastrados', component: ListarAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutesModule {}

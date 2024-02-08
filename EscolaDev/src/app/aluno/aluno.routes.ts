import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CadastroAlunoComponent } from './cadastro/cadastro.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

const routes: Routes = [
  { path: 'aluno/listar', component: ListarAlunoComponent },
  { path: 'aluno/cadastro', component: CadastroAlunoComponent },
  {
    path: '',
    redirectTo: 'aluno/cadastro',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutesModule {}

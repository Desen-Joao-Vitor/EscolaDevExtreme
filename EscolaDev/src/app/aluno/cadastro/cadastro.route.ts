import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro.component';

const routes: Routes = [
  { path: '', component: CadastroAlunoComponent },
  { path: 'aluno/cadastro', component: CadastroAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAlunoRouteModule {}

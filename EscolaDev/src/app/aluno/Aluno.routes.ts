import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { NotasComponent } from './aluno-notas/aluno-notas.component';
const routes: Routes = [
  { path: 'Alunos', component: CadastroComponent },
  { path: 'Alunos/Cadastro', component: CadastroComponent },
  { path: 'Alunos/Notas', component: NotasComponent },
  { path: 'Alunos/Matriculas', component: MatriculaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AlunosRoutesModule {}

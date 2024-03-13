import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './aluno/Cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'Menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'Alunos/Cadastrados',
    loadChildren: () =>
      import('./aluno/Cadastro/cadastro.module').then((m) => m.AlunoModule),
  },
  {
    path: 'Alunos/matriculas',
    loadChildren: () =>
      import('./aluno/matricula/matricula.module').then(
        (m) => m.MatriculaModule
      ),
  },
  {
    path: 'Professor/Cadastrados',
    loadChildren: () =>
      import('./professor/Cadastro/professor.module').then(
        (m) => m.ProfessorModule
      ),
  },
  {
    path: 'Professor/Vircular-Disciplina',
    loadChildren: () =>
      import(
        './professor/professor-disciplina/professor-disciplina.module'
      ).then((m) => m.ProfessorDisciplinaModule),
  },
  {
    path: 'Turmas',
    loadChildren: () =>
      import('./turma/turma.module').then((m) => m.TurmaModule),
  },
  {
    path: 'Disciplina',
    loadChildren: () =>
      import('./Disciplinas/Cadastro/disciplinas.module').then(
        (m) => m.DisciplinasModule
      ),
  },
  {
    path: 'Login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'aluno/delete',
  },

  {
    path: 'Menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'Alunos',
    loadChildren: () =>
      import('./aluno/aluno.module').then((m) => m.AlunoModule),
  },
  {
    path: 'Professor',
    loadChildren: () =>
      import('./professor/professor.module').then((m) => m.ProfessorModule),
  },
  {
    path: 'Turmas',
    loadChildren: () =>
      import('./turma/turma.module').then((m) => m.TurmaModule),
  },
  {
    path: 'Disciplina',
    loadChildren: () =>
      import('./Disciplinas/disciplinas-pag/disciplinas.module').then(
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

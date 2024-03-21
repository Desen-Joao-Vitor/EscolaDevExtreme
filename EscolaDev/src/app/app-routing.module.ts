import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Aunos/Notas',
  },
{  //Administrador
    path:'admin',
    loadChildren: () => import('./Conect-Ais/login-api/login-api.module').then((m) => m.LoginApiModule)
},
  // Usario deve Fazer login antes de realizar qualquer alteração
  {
    path: 'Login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  // Pagina de inicio
  {
    path: 'Home',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },

  // Alunos
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
    path: 'Alunos/Notas',
    loadChildren: () =>
      import('./aluno/aluno-notas/aluno-notas.module').then(
        (m) => m.AlunoNotasModule
      ),
  },
  //Professores
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
  //Turmas
  {
    path: 'Turmas',
    loadChildren: () =>
      import('./turma/turma.module').then((m) => m.TurmaModule),
  },
  // Disciplinas
  {
    path: 'Disciplina',
    loadChildren: () =>
      import('./Disciplinas/Cadastro/disciplinas.module').then(
        (m) => m.DisciplinasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

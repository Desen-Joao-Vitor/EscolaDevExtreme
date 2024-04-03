import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './aluno/Cadastro/cadastro.component';
import { MatriculaComponent } from './aluno/matricula/matricula.component';
import { NotasComponent } from './aluno/aluno-notas/aluno-notas.component';
import { TurmaComponent } from './turma/turma.component';
import { DisciplinasComponent } from './Disciplinas/Cadastro/disciplinas.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Login',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Apis/getsitucaomatricula/login-api/login-api.module').then(
        (m) => m.LoginApiModule
      ),
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Alunos',
    loadChildren: () =>
      import('./aluno/aluno.module').then((m) => m.AlunoModuleModule),
  },
  {
    path: 'Professores',
    loadChildren: () =>
      import('./professor/professor.module').then((m) => m.ProfessorModule),
  },
  {
    path: 'Turmas',
    component: TurmaComponent,
  },
  {
    path: 'Disciplina',
    component: DisciplinasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

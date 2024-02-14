import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoModule } from './aluno/aluno.module';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { CadastroAlunoComponent } from './aluno/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'aluno/cadastro',
  },
  {
    path: 'Login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'Menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'Disciplina',
    loadChildren: () =>
      import('./Disciplinas/disciplinas-pag/disciplinas.module').then(
        (m) => m.DisciplinasModule
      ),
  },
  {
    path: 'aluno/listar',
    component: ListarAlunoComponent,
  },
  {
    path: 'aluno/cadastro',
    component: CadastroAlunoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

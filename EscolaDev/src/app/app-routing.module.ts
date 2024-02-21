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
    path: 'aluno',
    component: ListarAlunoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

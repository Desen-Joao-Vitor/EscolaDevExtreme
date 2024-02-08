import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'professor/listar',
    pathMatch: 'full',
  },
  { path: 'professor/listar', component: ListarProfessorComponent },
  { path: 'professor/cadastro', component: CadastroProfessorComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorRoutesModule {}

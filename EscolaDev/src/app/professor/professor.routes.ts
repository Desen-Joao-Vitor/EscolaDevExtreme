import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';

const routes: Routes = [
  { path: '', component: ListarProfessorComponent },
  { path: 'Professor', component: ListarProfessorComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorRoutesModule {}

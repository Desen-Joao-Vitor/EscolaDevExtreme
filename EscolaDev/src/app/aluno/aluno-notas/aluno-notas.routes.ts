import { RouterModule, Routes } from '@angular/router';

import { AlunoNotasComponent } from './aluno-notas.component';
import { NgModule } from '@angular/core';

 const routes: Routes = [
  { path: '', component: AlunoNotasComponent},
   { path: 'Alunos/Notas', component: AlunoNotasComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosNotasRouteModule {}

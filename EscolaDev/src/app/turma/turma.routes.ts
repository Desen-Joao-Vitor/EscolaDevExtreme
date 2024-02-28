import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaComponent } from './turma.component';

const routes: Routes = [
  { path: '', component: TurmaComponent },
  { path: 'Turmas', component: TurmaComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurmaRoutesModule {}

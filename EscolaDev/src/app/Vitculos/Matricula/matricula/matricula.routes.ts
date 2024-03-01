import { RouterModule, Routes } from '@angular/router';
import { MatriculaComponent } from './matricula.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: MatriculaComponent },
  { path: 'Matricula', component: MatriculaComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculaRoutesModule {}

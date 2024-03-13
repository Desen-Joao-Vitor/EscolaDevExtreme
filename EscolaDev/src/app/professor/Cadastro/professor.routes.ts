import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProfessorComponent } from './cadastro.component';

const routes: Routes = [
  { path: '', component: CadastroProfessorComponent },
  { path: 'Professor/Cadastrados', component: CadastroProfessorComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorRoutesModule {}

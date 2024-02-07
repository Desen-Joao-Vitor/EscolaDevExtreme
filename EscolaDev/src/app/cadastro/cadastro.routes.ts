import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'cadastro', component: CadastroComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutesModule {}

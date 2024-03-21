import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginApiComponent } from './login-api.component';

const routes: Routes = [
  { path: '', component: LoginApiComponent },
  { path: 'Administrador', component: LoginApiComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginApiRoutesModule {}

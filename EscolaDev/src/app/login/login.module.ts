import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutes, FormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}

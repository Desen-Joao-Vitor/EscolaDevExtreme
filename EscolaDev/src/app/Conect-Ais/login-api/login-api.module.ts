import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginApiComponent } from './login-api.component';
import { LoginApiRoutesModule } from './login-api.modulos.routes';
import { DxButtonModule, DxFormModule, DxTextBoxModule } from 'devextreme-angular';
import { DxiItemModule, DxoLabelModule } from 'devextreme-angular/ui/nested';



@NgModule({
  declarations: [LoginApiComponent],
  imports: [
    //Aplicação
    CommonModule,
  LoginApiRoutesModule,
  //DevExtreme
  DxFormModule,
  DxiItemModule,
  DxoLabelModule,
  DxTextBoxModule,
  DxButtonModule,

  ],
  exports: [LoginApiComponent],
})
export class LoginApiModule {}

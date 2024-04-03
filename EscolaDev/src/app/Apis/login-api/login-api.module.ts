import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginApiComponent } from './login-api.component';
import { DxButtonModule, DxFormModule, DxTextBoxModule } from 'devextreme-angular';
import { DxiItemModule, DxoLabelModule } from 'devextreme-angular/ui/nested';
import { LoginApiService } from './login-api.service';



@NgModule({
  declarations: [LoginApiComponent],
  imports: [
    //Aplicação
    CommonModule,
  //DevExtreme
  DxFormModule,
  DxiItemModule,
  DxoLabelModule,
  DxTextBoxModule,
  DxButtonModule,

  ],
  exports: [LoginApiComponent],
  providers:[LoginApiService]
})
export class LoginApiModule {}

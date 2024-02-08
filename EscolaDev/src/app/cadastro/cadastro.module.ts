import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroComponent } from './cadastro.component';
import {
  DxButtonModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { ValidarCpfComponent } from './validar-cpf/validar-cpf.component';
import { ValidarCpfModule } from './validar-cpf/validar-cpf.module';

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxFormModule,
    FormsModule,
    DxTextBoxModule,
    ValidarCpfModule,
    DxButtonModule,
  ],
  declarations: [CadastroComponent],
  exports: [CadastroComponent],
})
export class CadastroModule {}

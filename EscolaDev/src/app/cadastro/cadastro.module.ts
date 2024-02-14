import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroComponent } from './cadastro.component';
import {
  DxButtonModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  NestedOptionHost,
} from 'devextreme-angular';
import { ValidarCpfModule } from './validar-cpf/validar-cpf.module';
import { FormsModule } from '@angular/forms';

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

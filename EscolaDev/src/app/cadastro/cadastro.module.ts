import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroComponent } from './cadastro.component';
import { CadastroRoutesModule } from './cadastro.routes';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxDateBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTextAreaModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { ValidarCpfComponent } from './validar-cpf/validar-cpf.component';
import { ValidarCpfModule } from './validar-cpf/validar-cpf.module';
import dxDataGrid from 'devextreme/ui/data_grid';

@NgModule({
  imports: [
    CommonModule,
    CadastroRoutesModule,
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

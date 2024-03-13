import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutesModule } from '../alunos.routes';
import { CadastroComponent } from './cadastro.component';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './cadastro-service';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    //Alicação
    AlunosRoutesModule,
    // DevExtreme
    DxButtonModule,
    DxDataGridModule,
    DxiItemModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxTemplateModule,
    DxDropDownBoxModule,
  ],
  exports: [CadastroComponent],
  providers: [AlunosService],
})
export class AlunoModule {}

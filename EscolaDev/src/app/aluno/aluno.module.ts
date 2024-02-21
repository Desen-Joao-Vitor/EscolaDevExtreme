import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutesModule } from './aluno.routes';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
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

@NgModule({
  declarations: [ListarAlunoComponent],
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
  exports: [ListarAlunoComponent],
})
export class AlunoModule {}

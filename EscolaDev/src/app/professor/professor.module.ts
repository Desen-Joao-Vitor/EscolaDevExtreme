import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorRoutesModule } from './professor.routes';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';
import { FormsModule } from '@angular/forms';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';

@NgModule({
  declarations: [ListarProfessorComponent],
  imports: [
    CommonModule,
    FormsModule,
    //aplicação
    ProfessorRoutesModule,
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
})
export class ProfessorModule {}

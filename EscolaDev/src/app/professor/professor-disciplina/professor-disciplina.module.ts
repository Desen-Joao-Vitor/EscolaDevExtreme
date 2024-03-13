import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfessorDisciplinaComponent } from './professor-disciplina.component';
import { ProfessorDisciplinaRutesModule } from './professor-disciplina.routes';
import {
  DxCheckBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { DxiItemModule, DxoFilterRowModule } from 'devextreme-angular/ui/nested';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfessorDisciplinaComponent],
  imports: [
    CommonModule,
FormsModule,
    //Aplicação
    ProfessorDisciplinaRutesModule,

    // DevExtreme
    DxDataGridModule,
    DxiItemModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxTemplateModule,
    DxCheckBoxModule,
  ],
})
export class ProfessorDisciplinaModule {}

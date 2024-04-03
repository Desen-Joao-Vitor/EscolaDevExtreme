import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from '../aluno/Cadastro/cadastro.component';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import {
  DxiItemModule,
  DxoFilterRowModule,
} from 'devextreme-angular/ui/nested';
import { ProfessorRoutes } from './professor.routes';
import { ProfessorDisciplinaComponent } from './professor-disciplina/professor-disciplina.component';
import { FormsModule } from '@angular/forms';
import { CadastroProfessorComponent } from './Cadastro/cadastro.component';

@NgModule({
  declarations: [CadastroProfessorComponent, ProfessorDisciplinaComponent],
  imports: [
    //Aplicação
    CommonModule,
    ProfessorRoutes,
    //DevExtreme
    DxButtonModule,
    DxiItemModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxoFilterRowModule,
    DxCheckBoxModule,
    //Angular
    FormsModule,
  ],
  exports: [CadastroProfessorComponent, ProfessorDisciplinaComponent],
})
export class ProfessorModule {}

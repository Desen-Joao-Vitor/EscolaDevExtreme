import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisciplinasComponent } from './disciplinas.component';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxTabsModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { DisciplinaRoutes } from './disciplina.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlunosRoutesModule } from '../../aluno/alunos.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    //Aplicação
    DisciplinaRoutes,
    AlunosRoutesModule,
    //DevExtreme
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxTabsModule,
    DxToolbarModule,
  ],
  declarations: [DisciplinasComponent],
  exports: [DisciplinasComponent],
})
export class DisciplinasModule {}

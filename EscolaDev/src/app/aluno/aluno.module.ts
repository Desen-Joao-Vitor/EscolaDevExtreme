import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutesModule } from './aluno.routes';
import { CadastroAlunoComponent } from './cadastro/cadastro.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { CadastroModule } from '../cadastro/cadastro.module';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component';

@NgModule({
  declarations: [
    CadastroAlunoComponent,
    ListarAlunoComponent,
    AlunoDeleteComponent,
  ],
  imports: [
    CommonModule,

    //Alicação
    AlunosRoutesModule,
    CadastroModule,
    // DevExtreme
    DxButtonModule,
    DxDataGridModule,
    DxiItemModule,
    DxSelectBoxModule,
    DxFormModule,

    DxTemplateModule,
  ],
  exports: [CadastroAlunoComponent, ListarAlunoComponent, AlunoDeleteComponent],
})
export class AlunoModule {}

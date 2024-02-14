import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutesModule } from './aluno.routes';
import { CadastroAlunoComponent } from './cadastro/cadastro.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { CadastroModule } from '../cadastro/cadastro.module';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [CadastroAlunoComponent, ListarAlunoComponent],
  imports: [
    CommonModule,
    //Alicação
    AlunosRoutesModule,
    CadastroModule,
    // DevExtreme
    DxButtonModule,
    DxDataGridModule,
    DxiItemModule,
  ],
  exports: [CadastroAlunoComponent, ListarAlunoComponent],
})
export class AlunoModule {}

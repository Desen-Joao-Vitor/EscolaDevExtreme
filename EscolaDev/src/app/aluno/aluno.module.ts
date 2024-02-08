import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosRoutesModule } from './aluno.routes';
import { CadastroAlunoComponent } from './cadastro/cadastro.component';
import { CadastroModule } from '../cadastro/cadastro.module';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { MatriculaService } from './matricula-service';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutesModule,
    CadastroModule,
    DxDataGridModule,
    DxTemplateModule,
  ],
  declarations: [CadastroAlunoComponent, ListarAlunoComponent],
  exports: [CadastroAlunoComponent, ListarAlunoComponent],
  providers: [MatriculaService],
})
export class AlunoModule {}

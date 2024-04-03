import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaComponent } from './matricula/matricula.component';
import { AlunosRoutesModule } from './Aluno.routes';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NotasComponent } from './aluno-notas/aluno-notas.component';
import { CadastroComponent } from './Cadastro/cadastro.component';

@NgModule({
  declarations: [NotasComponent, CadastroComponent, MatriculaComponent],
  imports: [
    //Aplicação
    CommonModule,
    AlunosRoutesModule,
    //DevExtreme
    DxDataGridModule,
    DxiItemModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxFormModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    // angular
    FormsModule,
  ],
  exports: [NotasComponent, CadastroComponent, MatriculaComponent],
})
export class AlunoModuleModule {}

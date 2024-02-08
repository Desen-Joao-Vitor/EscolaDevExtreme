import { CadastroModule } from './../cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';
import { ProfessorRoutesModule } from './professor.routes';

@NgModule({
  declarations: [CadastroProfessorComponent, ListarProfessorComponent],
  imports: [CommonModule, ProfessorRoutesModule, CadastroModule],
})
export class ProfessorModule {}

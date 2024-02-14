import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsultaComponent } from './consulta.component';
import { FormsModule } from '@angular/forms';
import { ValidarCpfModule } from '../cadastro/validar-cpf/validar-cpf.module';

@NgModule({
  imports: [CommonModule, FormsModule, ValidarCpfModule],
  declarations: [ConsultaComponent],
  exports: [ConsultaComponent],
})
export class ConsultaModule {}

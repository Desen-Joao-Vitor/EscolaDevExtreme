import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarCpfComponent } from './validar-cpf.component';
import { FormsModule } from '@angular/forms';
import { dxItem } from 'devextreme/ui/widget/ui.widget';
import { DxFormModule } from 'devextreme-angular';

@NgModule({
  declarations: [ValidarCpfComponent],
  imports: [CommonModule, FormsModule, DxFormModule],
  exports: [ValidarCpfComponent],
})
export class ValidarCpfModule {}

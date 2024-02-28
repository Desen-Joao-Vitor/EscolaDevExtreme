import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaComponent } from './turma.component';
import { TurmaRoutesModule } from './turma.routes';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { TurmaService } from './turma.service';

@NgModule({
  declarations: [TurmaComponent],
  imports: [
    CommonModule,
    // Aplicação
    TurmaRoutesModule,
    // DevExtreme
    DxButtonModule,
    DxDataGridModule,
    DxiItemModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxSelectBoxModule,
  ],
  exports: [TurmaComponent],
  providers: [TurmaService],
})
export class TurmaModule {}

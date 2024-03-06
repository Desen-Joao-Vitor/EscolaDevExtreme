import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatriculaComponent } from './matricula.component';
import { MatriculaRoutesModule } from './matricula-componernt.routes';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';

@NgModule({
  imports: [
    CommonModule,
    MatriculaRoutesModule, // DevExtreme
    DxButtonModule,
    DxDataGridModule,
    DxiItemModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxTemplateModule,
    DxDropDownBoxModule,
  ],
  declarations: [MatriculaComponent],
  exports: [MatriculaComponent],
  providers: [DatePipe],
})
export class MatriculaModule {}

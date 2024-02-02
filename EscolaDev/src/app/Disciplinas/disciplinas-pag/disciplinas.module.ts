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

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DisciplinaRoutes,
    DxTabsModule,
    DxToolbarModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [DisciplinasComponent],
  exports: [DisciplinasComponent],
})
export class DisciplinasModule {}

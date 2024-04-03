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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    //Aplicação
    CommonModule,
    FormsModule,
    HttpClientModule,
    //DevExtreme
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxTabsModule,
    DxToolbarModule,
  ],
  declarations: [DisciplinasComponent],
  exports: [DisciplinasComponent],
})
export class DisciplinasModule {}

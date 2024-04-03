import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, } from './home.component';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxSchedulerModule } from 'devextreme-angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    //Aplicação
    CommonModule,
    FormsModule,
    //DevExtreme
    DxSchedulerModule,
    DxDataGridModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}

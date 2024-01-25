import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutes } from './menu.routes';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxSchedulerModule } from 'devextreme-angular';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutes,
    DxSchedulerModule,
    DxDataGridModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule {}

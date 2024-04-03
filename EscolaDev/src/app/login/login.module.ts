import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DxButtonModule, DxDataGridModule, DxFormModule } from 'devextreme-angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,

    FormsModule,
    //DevExtreme
    DxFormModule,
    DxButtonModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}

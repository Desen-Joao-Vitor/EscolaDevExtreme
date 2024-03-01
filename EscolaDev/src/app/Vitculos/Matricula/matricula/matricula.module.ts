import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatriculaComponent } from './matricula.component';
import { MatriculaRoutesModule } from './matricula.routes';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { MatriculaService } from '../../../aluno/matricula.service';

@NgModule({
  declarations: [MatriculaComponent],
  imports: [
    CommonModule,
    MatriculaRoutesModule,
    // DevExtreme
    DxDataGridModule,
  ],
  exports: [MatriculaComponent],
  providers: [MatriculaService],
})
export class MatriculaModule {}

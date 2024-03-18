import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunoNotasComponent } from './aluno-notas.component';
import { DxDataGridModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { AlunosNotasRouteModule } from './aluno-notas.routes';

@NgModule({
  declarations: [AlunoNotasComponent],
  imports: [CommonModule,
    //Aplicação
   AlunosNotasRouteModule,
    //DevExtrme
    DxDataGridModule,
    DxiItemModule,


    ]
     ,
  exports: [AlunoNotasComponent],
})
export class AlunoNotasModule {}

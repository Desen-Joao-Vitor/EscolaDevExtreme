import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunoNotasComponent } from './aluno-notas.component';
import { AlunosNotasRouteModule } from './aluno-notas.routes';
import { DxDataGridModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { AlunosNotasService } from './aluno-notas.service';

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

import { AlunosService } from './../alunos-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { MatriculaService } from './matricula-services';
import { TurmaService } from '../../turma/turma.service';
import { GetsitucaomatriculaService } from '../../Apis/getsitucaomatricula/getsitucaomatricula.service';
import { DatePipe } from '@angular/common';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import { DxDataGridComponent } from 'devextreme-angular';
import { empty } from 'rxjs';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent  {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  //Service
  dataAluno: any;
  dataTurma: any;
  dataSituacaoMatricula:any;
  dataMatricula: CustomStore;
  selectedRows!: number;
  //OnEditorPreparing
  campoAluno: any
  suaData: Date = new Date();
  // Aplicação
  constructor(
    // select
   serviceAluno: AlunosService,
   serviceTurma: TurmaService,
   serviceSituacaoMatricula: GetsitucaomatriculaService,

   // Dados
   serviceMatricula: MatriculaService,
   private datePipe: DatePipe
  ) {
    //select
    this.dataSituacaoMatricula = serviceSituacaoMatricula.getDataSource();
    this.dataAluno = serviceAluno.getDataSource();
    this.dataTurma = serviceTurma.getDataSource();
    //dados
    this.dataMatricula = serviceMatricula.getDataSource();
  }
  onSelectionChanged(data: any) {
    console.log(data);
  }
  async delete() {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((id: any) => {
        this.dataMatricula.remove(id)
      });
      window.location.reload();
    }
  }
  formatarData(): any {
    if (this.suaData instanceof Date) {
      const dataFormatada = this.datePipe.transform(this.suaData, 'yyyy/MM/dd');
      console.log(dataFormatada);
      return dataFormatada;
    } else {
      console.error('Valor inválido para formatação de data:', this.suaData);
      return null;
  }
}
alterarCampo(){
  if(empty(this.campoAluno)){
console.log(this.onSelectionChanged(this.dataAluno));
  }
}
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'data_alteracao':
          {
            this.suaData = e.value;

            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.suaData = ev;
              this.formatarData();
            };

            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
          case 'idAluno':
            {
              this.campoAluno = e.value;
              const fnc = (ev: any) => {
                defaultFnc(ev);
                this.campoAluno = ev;
              this.alterarCampo();
              };

              e.editorOptions.onValueChanged = fnc.bind(this);
            }
      }
    }
  }
}

import { AlunosService } from './../alunos-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { MatriculaService } from './matricula-services';
import { TurmaService } from '../../turma/turma.service';
import { GetsitucaomatriculaService } from '../../Apis/getsitucaomatricula/getsitucaomatricula.service';
import { DatePipe } from '@angular/common';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent implements OnInit {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  //Service
  dataAluno: CustomStore;
  dataTurma: CustomStore;
  dataMatricula: CustomStore;
  dataSituacaoMatricula: CustomStore;

  selectedRows!: number;
  dataAtual: any;


  // Aplicação
  constructor(
   private serviceAluno: AlunosService,
   private serviceTurma: TurmaService,
   private serviceMatricula: MatriculaService,
   private serviceSituacaoMatricula: GetsitucaomatriculaService,
    private datePipe: DatePipe
  ) {
    this.dataAluno = serviceAluno.getDataSource();
    this.dataTurma = serviceTurma.getDataSource();
    this.dataMatricula = serviceMatricula.getDataSource();
    this.dataSituacaoMatricula = serviceSituacaoMatricula.getDataSource();
  }
  ngOnInit(): void {}

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
  formataDate() {
  const dataFormatada =  this.serviceMatricula.formatarData(this.dataAtual);

   this.dataAtual.component.option('value', dataFormatada);

  }

  onEditorPreparing(e: any) {
    const that = this;
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'data_alteracao':
          {
            this.dataAtual = e.value;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.dataAtual= ev;
              console.log('oi');
              this.formataDate()
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
        }
      }
    }

}

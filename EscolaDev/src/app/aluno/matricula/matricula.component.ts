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
import e from 'cors';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent {
  onSelectionValueChange(e: any) {
    console.log(e);
  }
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  //Service
  dataAluno: any;
  dataTurma: any;
  dataSituacaoMatricula: any;
  dataMatricula: CustomStore;
  selectedRows!: number;
  //OnEditorPreparing
  nomeField: any;
  idAlunoField: any;
  alunoSelect: any;
  suaData: Date = new Date();
  cpfAluno: any = {};

  alunoDados: any;

  // Aplicação
  constructor(
    // select
   private serviceAluno: AlunosService,
    serviceTurma: TurmaService,
    serviceSituacaoMatricula: GetsitucaomatriculaService,
    serviceMatricula: MatriculaService,
    // Dados
    private datePipe: DatePipe
  ) {
    //situacao
    serviceSituacaoMatricula.get().subscribe((res) => {
      this.dataSituacaoMatricula = res.data;
    });
    //aluno
    serviceAluno.get().subscribe((res) => {
      this.dataAluno = res.data;
    });
    //turma
    serviceTurma.get().subscribe((res) => {
      this.dataTurma = res.data;
    });
    //dados
    this.dataMatricula = serviceMatricula.getDataSource();
  }
  async delete() {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((id: any) => {
        this.dataMatricula.remove(id);
      });
      window.location.reload();
    }
  }
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'idAluno': {
          this.idAlunoField = e;
          const fnc = (ev: any) => {
            defaultFnc(ev);
            this.idAlunoField = ev;
console.log(this.dataAluno)
            this.dataAluno.load().then((res: any) => {
              this.alunoSelect = res.data.filter(
                (f: any) => f.id == this.idAlunoField.value
              );
              e.component.cellValue(0, 'cpf', this.alunoSelect[0].cpf);
            });
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
          break;
        }
      }
    }
  }
}

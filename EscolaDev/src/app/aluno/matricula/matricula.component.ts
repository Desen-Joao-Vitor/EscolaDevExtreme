import { AlunosService } from './../alunos-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../../turma/turma.service';
import CustomStore from 'devextreme/data/custom_store';
import { MatriculaService } from './matricula-services';
import e from 'cors';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent implements OnInit {
  dataAluno: CustomStore;
  dataTurma: CustomStore;
  dataMatricula: CustomStore;

  //dados do aluno

  dataIdAluno: any;
  dataNomeAluno: any;
  dataCpfAluno: any;

  // id selecionados
  selectedAlunoId!: number;
  selecteTurmaId!: number;

  //Aplicação
  constructor(
    private http: HttpClient,
    serviceAluno: AlunosService,
    serviceTurma: TurmaService,
    serviceMatricula: MatriculaService
  ) {
    this.dataAluno = serviceAluno.getDataSource();
    this.dataTurma = serviceTurma.getDataSource();
    this.dataMatricula = serviceMatricula.getDataSource();
  }
  ngOnInit(): void {}
  onAlunoSelectionChanged(data: any) {
    this.selectedAlunoId = data.selectedItem;
    console.log(this.selectedAlunoId);
    console.log(data);
  }
  onTurmaSelectionChanged(data: any) {
    this.selecteTurmaId = data.selectedItem;
    console.log('Turma selecionada', this.selecteTurmaId);
    console.log(this.selectedAlunoId);
  }

  onEditorPreparing(e: any) {
    const that = this;
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'dxSelectBox':
          {
            this.dataIdAluno = e;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.dataIdAluno = ev;
              console.log('oi');
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
      }
    }
  }
}

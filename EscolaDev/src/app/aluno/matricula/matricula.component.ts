import { AlunosService } from '../Cadastro/cadastro.service';
import { Component,  ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { MatriculaService } from './matricula.services';
import { TurmaService } from '../../turma/turma.service';
import { GetsitucaomatriculaService } from '../../Apis/getsitucaomatricula/extracaoTabelaSituacao.service';
import { DxDataGridComponent } from 'devextreme-angular';


@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;

  //Services
  dataAluno: any;
  alunoCpf:any;
  dataTurma: any;
  dataSituacaoMatricula: any;
  dataMatricula: CustomStore;
  //Nome
  nomeField: any;
  idAlunoField: any;
  alunoSelect: any;
  // Aplicação
  constructor(
    // select
    serviceAluno: AlunosService,
    serviceTurma: TurmaService,
    serviceSituacaoMatricula: GetsitucaomatriculaService,
    serviceMatricula: MatriculaService,
  ) {
    //situacao
    serviceSituacaoMatricula.get().subscribe((res) => {
      this.dataSituacaoMatricula = res.data;
    });
    //aluno
   serviceAluno.get().subscribe((res) => {
     this.dataAluno = res.data;
   });
this.alunoCpf = serviceAluno.getDataSource();
    //turma
    serviceTurma.get().subscribe((res) => {
      this.dataTurma = res.data;
    });
    //Matricula
    this.dataMatricula = serviceMatricula.getDataSource();
  }

  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'id_aluno': {
          this.idAlunoField = e;
          const fnc = (ev: any) => {
            defaultFnc(ev);
            this.idAlunoField = ev;
            console.log(this.dataAluno)

           this.alunoCpf.load().then((res: any) => {
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

import { ProfessorDisciplinaService } from './../../professor/professor-disciplina/professor-disciplina.service';
import { Component, ViewChild } from '@angular/core';
import { AlunosNotasService } from './aluno-notas.service';
import { MatriculaService } from '../matricula/matricula.services';
import CustomStore from 'devextreme/data/custom_store';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-aluno-notas',
  templateUrl: './aluno-notas.component.html',
  styleUrls: ['aluno-notas.component.scss'],
})
export class NotasComponent {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  //Data Souce
  dataAlunoNotas: CustomStore;
  dataMatricula: any;
  dataProfessorDisciplina: any;
  dataVinculos: any; //Tras dados da Professor Disciplina

  //Campo vinculo
  idVinculoField: any;
  idSelectVinculos: any;
  dadosVinculos: any;

  // Campo selecionar matricula
  idAlunoField: any;
  alunoSelect: any;
  alunoCpf: any;

  constructor(
    serviceAlunoNotas: AlunosNotasService,
    serviceMatricula: MatriculaService,
    serviceVinculo: ProfessorDisciplinaService, // DataSource de Professor Disciplina
    serviceProfessorDisciplina: ProfessorDisciplinaService
  ) {
    //Aluno
    this.alunoCpf = serviceMatricula.getDataSource();
    //Vinculo
    this.dataVinculos = serviceVinculo.getDataSource();
    serviceProfessorDisciplina.get().subscribe((res: any) => {
      this.dadosVinculos = res.data;
    });
    //Matricula
    serviceMatricula.get().subscribe((res) => {
      this.dataMatricula = res.data;
    });
    // Professor disciplina
    serviceProfessorDisciplina.get().subscribe((res) => {
      this.dataProfessorDisciplina = res.data;
    });
    // Notas
    this.dataAlunoNotas = serviceAlunoNotas.getDataSource();
  }

  //Editar campos
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'id_matricula':
          {
            this.idAlunoField = e;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.idAlunoField = ev;

              this.alunoCpf.load().then((res: any) => {
                this.alunoSelect = res.data.filter(
                  (f: any) => f.id == this.idAlunoField.value
                );
                e.component.cellValue(
                  0,
                  'cpf_aluno',
                  this.dataMatricula[0].cpf
                );
              });
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
        //Vinculo
        case 'id_professor_disciplina': {
          this.idVinculoField = e;
          const fnc = (ev: any) => {
            defaultFnc(ev);
            this.idVinculoField = ev;

            this.dataVinculos.load().then((res: any) => {
              this.idSelectVinculos = res.data.filter(
                (f: any) => f.id == this.idVinculoField.value
              );
              e.component.cellValue(
                0,
                'cpf_professor',
                this.dataProfessorDisciplina[0].CPF
              );
              e.component.cellValue(
                0,
                'professor',
                this.dataProfessorDisciplina[0].professor
              );
              e.component.cellValue(
                0,
                'disciplina',
                this.dataProfessorDisciplina[0].disciplina
              );
            });
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
        }
      }
    }
  }
}

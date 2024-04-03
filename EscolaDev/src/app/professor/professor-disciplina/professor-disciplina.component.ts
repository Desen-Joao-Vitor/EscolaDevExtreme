import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ProfessorDisciplinaService } from './professor-disciplina.service';
import CustomStore from 'devextreme/data/custom_store';
import { DisciplinasService } from '../../Disciplinas/Cadastro/disciplinas.service';
import { ProfessorServiceService } from '../Cadastro/professor.service.service';

@Component({
  selector: 'app-professor-disciplina',
  templateUrl: './professor-disciplina.component.html',
  styleUrl: './professor-disciplina.component.scss',
})
export class ProfessorDisciplinaComponent {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  //DadaSource
  dataVinculo: CustomStore;
  dataProfessor: any;
  dataDisciplina: any;
  disciplinaCargaHoraria: any;
  //OnEditorPreparing
  nomeField: any;
  idAlunoField: any;
  disciplinaField: any;
  professorCpf: any;
  // Ddados
  alunoSelect: any;
  disciplinaSelect: any;

  constructor(
    servicesVinculo: ProfessorDisciplinaService,
    serviceDisciplina: DisciplinasService,
    serviceProfessor: ProfessorServiceService
  ) {
    // Professor
    serviceProfessor.get().subscribe((res) => {
      this.dataProfessor = res.data;
    });
    this.professorCpf = serviceProfessor.getDataSource();
    // Disciplina
    serviceDisciplina.get().subscribe((res) => {
      this.dataDisciplina = res.data;
    });
    this.disciplinaCargaHoraria = serviceDisciplina.getDataSource();

    // Matricula
    this.dataVinculo = servicesVinculo.getDataSource();
  }
  //popup
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'id_professor':
          {
            this.idAlunoField = e;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.idAlunoField = ev;

              this.professorCpf.load().then((res: any) => {
                this.alunoSelect = res.data.filter(
                  (f: any) => f.id == this.idAlunoField.value
                );
                e.component.cellValue(0, 'CPF', this.alunoSelect[0].cpf);
              });
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
        case 'id_disciplina': {
          this.disciplinaField = e;
          const fnc = (ev: any) => {
            defaultFnc(ev);
            this.disciplinaField = ev;

            this.disciplinaCargaHoraria.load().then((res: any) => {
              this.disciplinaSelect = res.data.filter(
                (f: any) => f.id == this.disciplinaField.value
              );
              e.component.cellValue(
                0,
                'carga_horaria',
                this.disciplinaSelect[0].carga_horaria
              );
            });
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
        }
      }
    }
  }
}

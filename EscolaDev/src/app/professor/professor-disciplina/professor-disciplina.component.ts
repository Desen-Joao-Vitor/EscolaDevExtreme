import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ProfessorDisciplinaService } from './professor-disciplina.service';
import CustomStore from 'devextreme/data/custom_store';
import { DisciplinasService } from '../../Disciplinas/disciplinas.service';
import { ProfessorServiceService } from '../Cadastro/professor-service.service';

@Component({
  selector: 'app-professor-disciplina',
  templateUrl: './professor-disciplina.component.html',
  styleUrl: './professor-disciplina.component.scss',
})
export class ProfessorDisciplinaComponent {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  //Variaveis
  dataVinculo: CustomStore;
  professorCpf: any;
  //OnEditorPreparing
  nomeField: any;
  idAlunoField: any;
  alunoSelect: any;

  //Services
  dataProfessor: any;
  dataDisciplina: any;

  constructor(
    servicesVinculo: ProfessorDisciplinaService,
    serviceDisciplina: DisciplinasService,
    serviceProfessor: ProfessorServiceService
  ) {
    // Professor
    serviceProfessor.get().subscribe((res) => {
      this.dataProfessor = res.data;
    });
    this.professorCpf = serviceProfessor.getDataSource()
    // Disciplina
    serviceDisciplina.get().subscribe((res) => {
      this.dataDisciplina = res.data;
    });
    // dada virculo
    this.dataVinculo = servicesVinculo.getDataSource();
  }
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'id_professor': {
          this.idAlunoField = e;
          const fnc = (ev: any) => {
            defaultFnc(ev);
            this.idAlunoField = ev;
            console.log(this.dataProfessor);

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
/*case 'id_disciplina':{
  idProfessorF =e ;
  const fnc = (ev: any) => {
            defaultFnc(ev);
            this.idAlunoField = ev;
             console.log(this.dataProfessor);
}
*/      }
    }
  }
}

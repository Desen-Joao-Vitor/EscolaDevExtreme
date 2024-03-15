import { ProfessorDisciplinaService } from './../../professor/professor-disciplina/professor-disciplina.service';
import { Component } from '@angular/core';
import { AlunosNotasService } from './aluno-notas.service';
import { MatriculaService } from '../matricula/matricula-services';
import CustomStore from 'devextreme/data/custom_store';
import { AlunosService } from '../Cadastro/cadastro-service';

@Component({
  selector: 'app-aluno-notas',
  templateUrl: './aluno-notas.component.html',
  styleUrls: ['./alunos-notas.component.scss'],
})
export class AlunoNotasComponent {
  //Data Souce
  dataAlunoNotas: CustomStore;
  dataMatricula: any;
  dataProfessorDisciplina: any;

  //onEditorPreparing
  idAlunoField: any;
  alunoCpf: any;
  alunoSelect: any;

  constructor(
    serviceAlunoNotas: AlunosNotasService,
    serviceMatricula: MatriculaService,
    serviceAluno: AlunosService,
    serviceProfessorDisciplina: ProfessorDisciplinaService
  ) {
    //Aluno
    this.alunoCpf = serviceMatricula.getDataSource();

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
            console.log(this.dataMatricula);


            this.alunoCpf.load().then((res: any) => {
              this.alunoSelect = res.data.filter(
                (f: any) => f.id == this.idAlunoField.value
              );
              console.log(this.alunoSelect)
              e.component.cellValue(0, 'cpf_aluno', this.alunoSelect[0].cpf);
            });
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
          break;
        }
      }
    }
  }
}

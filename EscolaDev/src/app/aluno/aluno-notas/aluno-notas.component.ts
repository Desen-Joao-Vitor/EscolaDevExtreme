import { ProfessorDisciplinaService } from './../../professor/professor-disciplina/professor-disciplina.service';
import { Component } from '@angular/core';
import { AlunosNotasService } from './aluno-notas.service';
import { MatriculaService } from '../matricula/matricula-services';

@Component({
  selector: 'app-aluno-notas',
  templateUrl: './aluno-notas.component.html',
  styleUrls: ['./alunos-notas.component.scss'],
})
export class AlunoNotasComponent {
  //Data Souce
dataAlunoNotas: any

constructor(
   serviceAlunoNotas: AlunosNotasService,
   serviceMatricula: MatriculaService,
   serviceProfessorDisciplina: ProfessorDisciplinaService
   ){
//Matricula
   // Professor disciplina

  // Notas
  this.dataAlunoNotas = serviceAlunoNotas.getDataSource();
}
}

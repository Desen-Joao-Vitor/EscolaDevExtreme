import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos-service';
import { TurmaService } from '../../turma/turma.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent implements OnInit {
  dataAluno: CustomStore;
  dataTurma: CustomStore;

  constructor(
    private http: HttpClient,
    serviceAluno: AlunosService,
    serviceTurma: TurmaService
  ) {
    this.dataAluno = serviceAluno.getDataSource();
    this.dataTurma = serviceTurma.getDataSource();
  }
  ngOnInit(): void {
    console.log('oi');
  }
}

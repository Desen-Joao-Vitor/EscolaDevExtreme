import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos-service';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.scss',
})
export class ListarAlunoComponent implements OnInit {
  aluno: any[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.getalunos();
  }

  getalunos(): void {
    this.alunosService.getAlunos().subscribe(
      (data: any) => {
        this.aluno = data.data;
        console.log(this.alunosService);
      },
      (error: any) => {
        console.error('Erro ao obter matrículas:', error);
      }
    );
  }
}

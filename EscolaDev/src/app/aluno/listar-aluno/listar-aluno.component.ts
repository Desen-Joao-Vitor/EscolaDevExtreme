import { Component } from '@angular/core';
import { Employee, ListarService } from './listar-aluno.service';
import { MatriculaService } from '../matricula-service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.scss',
})
export class ListarAlunoComponent {
  matriculas: any[] = [];

  constructor(private matriculaService: MatriculaService) {}

  ngOnInit(): void {
    this.getMatriculas();
  }

  getMatriculas(): void {
    this.matriculaService.getMatriculas().subscribe(
      (data: any) => {
        this.matriculas = data.data;
      },
      (error: any) => {
        console.error('Erro ao obter matrículas:', error);
      }
    );
  }
}

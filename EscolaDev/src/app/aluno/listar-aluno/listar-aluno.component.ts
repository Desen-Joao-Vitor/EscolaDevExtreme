import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos-service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.scss'],
})
export class ListarAlunoComponent implements OnInit {
  aluno: any[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunosService.getAlunos().subscribe(
      (data: any) => {
        this.aluno = data.data;
      },
      (error: any) => {
        console.error('Erro ao obter alunos:', error);
      }
    );
  }

  editarRegistro(aluno: any): void {
    // Implemente sua lógica para editar o registro do aluno
    console.log('Editar:', aluno);
  }

  excluirRegistro(aluno: any): void {
    // Implemente sua lógica para excluir o registro do aluno
    this.alunosService.deleteAluno(aluno.id).subscribe(
      () => {
        console.log('Aluno excluído com sucesso');
        // Atualize a lista de alunos após a exclusão
        this.getAlunos();
      },
      (error: any) => {
        console.error('Erro ao excluir aluno:', error);
      }
    );
  }
}

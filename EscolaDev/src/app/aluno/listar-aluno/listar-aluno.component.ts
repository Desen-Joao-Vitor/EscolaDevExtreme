import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from '../alunos-service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.scss'],
})
export class ListarAlunoComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;
  aluno: any[] = [];
  editedRow: any = {};

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
}

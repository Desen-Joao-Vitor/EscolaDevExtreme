import { AlunosService } from './../alunos-service';
import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Options, Store } from 'devextreme/data/abstract_store';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.scss'],
})
export class AlunoDeleteComponent {
  aluno: any = {
    id_aluno: '',
    nome: '',
    cpf: '',
  };

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
  onSelectionChanged(event: SelectionChangedEvent) {
    const selectedRowKeys = event.selectedRowsData.map(
      (row) => row.id_aluno
    ) as number[];

    if (selectedRowKeys.length > 0) {
      selectedRowKeys.forEach((id: number) => {
        this.alunosService.deleteAluno(id).subscribe(
          () => {
            console.log(`Aluno com ID ${id} deletado com sucesso`);
            // Se necessário, atualize a lista de alunos após a exclusão
            this.getAlunos();
          },
          (error: any) => {
            console.log(`Erro ao deletar aluno com ID ${id}`, error);
          }
        );
      });
    }
  }
  deleteSelectedRecords() {}
}

import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AlunosService } from './../alunos-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.scss'],
})
export class AlunoDeleteComponent implements OnInit {
  @ViewChild('alunoId', { static: false }) alunoId!: DxDataGridComponent;

  aluno: any = {
    id_aluno: '',
    nome: '',
    cpf: '',
  };

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    console.log(this.getAlunos());
    console.log(this.alunoId);
  }

  getAlunos() {
    this.alunosService.getAlunos().subscribe(
      (data: any) => {
        this.aluno = data.data;
      },
      (error: any) => {
        console.error('Erro ao obter alunos:', error);
      }
    );
  }

  deleteSelectedRecords(): Observable<number> {
    const selectedRows = this.alunoId.instance?.getSelectedRowsData();

    if (selectedRows && selectedRows.length > 0) {
      const deleteObservables: Observable<Object>[] = selectedRows.map(
        (row: any) => this.deleteRecord(row.id_aluno)
      );

      return forkJoin(deleteObservables).pipe(
        map(() => {
          // Todos os registros foram deletados com sucesso
          // Se necessário, atualize a lista de alunos após a exclusão
          this.getAlunos();
          return 0;
        }),
        catchError((error: any) => {
          console.log('Erro ao deletar registros', error);
          return of(-1);
        })
      );
    } else {
      console.log('Nenhum registro selecionado para deletar');
      return of(-1);
    }
  }

  private deleteRecord(id: number): Observable<Object> {
    return this.alunosService.deleteAluno(id);
  }
}

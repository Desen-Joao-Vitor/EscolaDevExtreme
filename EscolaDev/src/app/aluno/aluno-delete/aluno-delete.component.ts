import { AlunosService } from './../alunos-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.scss'],
})
export class AlunoDeleteComponent implements OnInit {
  @ViewChild('alunoId', { static: false }) alunoId!: DxDataGridComponent;

  //dataSource
  aluno: any = {
    id_aluno: '',
    nome: '',
    cpf: '',
  };
  states: any = {
    id_aluno: '',
    nome: '',
  };
  key: any;
  idSelecionado!: number;
  dataSource!: ArrayStore;
  data: any;

  constructor(private alunosService: AlunosService) {
    this.dataSource = new ArrayStore({
      key: 'id_aluno',
      data: this.data,
    });
  }

  ngOnInit(): void {
    this.getAlunos();
    console.log('id selecionado', this.idSelecionado);
    console.log('id states aluno', this.states.id_aluno);
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
  deleteIdSelecionado() {
    if (Array.isArray(this.idSelecionado)) {
      this.idSelecionado.forEach((row: any) => {
        this.deleteAluno(row.id_aluno);
      });
    }
  }

  deleteAluno(id: number) {
    this.alunosService.deleteAluno(id).subscribe(
      () => {
        // Atualize o dataSource ou faça outras ações necessárias após a exclusão
        console.log(`Aluno com ID ${id} excluído com sucesso.`);
      },
      (error: any) => {
        console.error(`Erro ao excluir aluno com ID ${id}:`, error);
      }
    );
  }
  onSelectionChanged(data: any) {
    this.idSelecionado = data.selectedRowKeys;
    console.log(data);
    console.log(this.idSelecionado);
  }
  // Salvar e Editar

  onValueChanged(t: any, y: any) {
    throw new Error('Method not implemented.');
  }
}

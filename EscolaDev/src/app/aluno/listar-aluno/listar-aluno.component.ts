import { response } from 'express';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from '../alunos-service';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.scss'],
})
export class ListarAlunoComponent implements OnInit {
  // Delete
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  dataSource: CustomStore;
  selectedRows!: number;

  // Cadastro
  estados!: string[];

  constructor(private service: AlunosService) {
    this.dataSource = service.getDataSource();
  }
  ngOnInit(): void {}

  delete(id: any) {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((row: any) => {
        this.dataSource.remove(row.id);
      });
      console.log('ola');
      // this.dataGrid.instance.refresh();
    }
  }
  formatarCPF() {}

  onSelectionChanged(data: any) {
    this.selectedRows = data.selectedRowKeys;
    console.log(data);
    console.log(this.selectedRows);
  }

  registrarCep(event: any, form: any) {
    const cep = event.target.value.replace(/\D/g, '');
    debugger;
    /*if (cep !== null && cep !== '') {
      return this.service
        .ConsultarCep(cep)
        .subscribe //(dados: any) => this.dadosEndereco(dados)
        ();
    }*/
  }
}

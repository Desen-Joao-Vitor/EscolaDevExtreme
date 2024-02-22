import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from '../alunos-service';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import ODataStore from 'devextreme/data/odata/store';

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

  //editar
  store!: ODataStore;

  // Cadastro
  estados!: string[];
  data!: any[];

  constructor(private service: AlunosService) {
    this.dataSource = service.getDataSource();

    //editar
    this.store = new ODataStore({
      key: 'id',
      keyType: 'Int32',
      // Other ODataStore properties go here
    });
  }
  ngOnInit(): void {}

  delete() {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((id: any) => {
        this.service.getDataSource().remove(id);
      });
      console.log('ola');
      // this.dataGrid.instance.refresh();
    }
  }
  editar(): any {
    const that = this;
    console.log('ola');

    // if (that.selectedRows. !== null) {
    //   this.selectedRows.toArray.forEach((id: any) => {});
    // }
  }

  onSelectionChanged(data: any) {
    this.selectedRows = data.selectedRowKeys;
    console.log(data);
    console.log(this.selectedRows);
  }

  /* registrarCep(event: any, form: any) {
    const cep = event.target.value.replace(/\D/g, '');
    debugger;
    /*if (cep !== null && cep !== '') {
      return this.service
        .ConsultarCep(cep)
        .subscribe //(dados: any) => this.dadosEndereco(dados)
        ();
    }
  }*/

  formatarCPF(data: any) {
    debugger;
    const that = this;
    // Remove caracteres não numéricos
    const numerosCpf = that.data.values.arguments.replace(/\D/g, '');

    // Limita o comprimento do CPF para 11 dígitos
    const cpfFormatado = numerosCpf.slice(0, 11);

    // Formata o CPF com pontos e traço
    this.data = cpfFormatado.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
  }
}

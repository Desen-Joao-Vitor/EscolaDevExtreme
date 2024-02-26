import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ProfessorServiceService } from './professor-service.service';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrl: './listar-professor.component.scss',
})
export class ListarProfessorComponent implements OnInit {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  dataSource: CustomStore;
  selectedRows!: number;
  estados!: string[];
  data!: any[];
  cepField: any;

  cpfField: any;
  cidadeField: any;
  menssageErro = ' ';

  constructor(
    private service: ProfessorServiceService,
    private http: HttpClient
  ) {
    this.dataSource = service.getDataSource();
  }
  ngOnInit(): void {}

  async delete() {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((id: any) => {
        this.service.getDataSource().remove(id);
      });
      // window.location.reload();
    }
  }

  onSelectionChanged(data: any) {
    this.selectedRows = data.selectedRowKeys;
    console.log(this.selectedRows);
  }

  registarCep() {
    if (this.cepField.value.length == 8) {
      this.service.ConsultarCep(this.cepField.value).subscribe(
        (data) => {
          this.cidadeField.component.cellValue(0, 'cidade', data.localidade);
          this.cidadeField.component.cellValue(0, 'bairro', data.bairro);
          this.cidadeField.component.cellValue(0, 'rua', data.logradouro);
          this.cidadeField.component.cellValue(0, 'estado', data.uf);
        },
        (error) => {
          console.error('Erro ao consultar CEP:', error);
        }
      );
    }
  }

  consultarCpf() {
    // Chama a função de formatação de CPF
    const cpfFormatado = this.service.formatarCpf(this.cpfField.value);

    // Atualiza o valor na tela com o CPF formatado
    this.cpfField.component.option('value', cpfFormatado);
  }

  onEditorPreparing(e: any) {
    const that = this;
    if (e.parentType === 'dataRow') {
      const defaultFnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'cep':
          {
            this.cepField = e;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.cepField = ev;
              this.registarCep();
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;

        case 'cidade':
          {
            this.cidadeField = e;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.cidadeField = ev;
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;

        case 'cpf': {
          this.cpfField = e;
          const fnc = (ev: any) => {
            defaultFnc(ev);
            this.cpfField = ev;
            this.consultarCpf();
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
        }
      }
    }
  }
}

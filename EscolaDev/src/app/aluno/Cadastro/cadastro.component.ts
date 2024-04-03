import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from './cadastro.service';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'app-listar-aluno',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  //Alunos
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  dataSource: CustomStore;

  //Variavel
  data!: any[];

  //Dados do Cep
  cepField: any;
  cpfField: any;
  cidadeField: any;

  constructor(private service: AlunosService) {
    this.dataSource = service.getDataSource();
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
        case 'cpf':
          {
            this.cpfField = e;
            const fnc = (ev: any) => {
              defaultFnc(ev);
              this.cpfField = ev;
              this.consultarCpf();
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
      }
    }
  }
}

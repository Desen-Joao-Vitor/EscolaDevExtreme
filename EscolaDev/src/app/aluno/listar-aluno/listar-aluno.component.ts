import { lastValueFrom } from 'rxjs';
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

  constructor(private service: AlunosService) {
    this.dataSource = service.getDataSource();
  }
  ngOnInit(): void {}

  delete() {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((id: any) => {
        this.service.getDataSource().remove(id);
      });
      console.log('ola');
      this.service.getDataSource();
    }
  }

  onSelectionChanged(data: any) {
    this.selectedRows = data.selectedRowKeys;
    console.log(data);
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

  formatarCPF() {
    if (this.cpfField.value.length == 12) {
      console.log(this.cpfField.value);
      const that = this;
      // Remove caracteres não numéricos
      const numerosCpf = this.cpfField.value.replace(/\D/g, '');

      // Limita o comprimento do CPF para 11 dígitos
      const cpfFormatado = numerosCpf.slice(0, 11);

      // Formata o CPF com pontos e traço
      this.cpfField = cpfFormatado.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );
      this.cpfField.componet.component.cellValue(0, 'cpf', this.cpfField);
    }
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
            this.formatarCPF();
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
        }
      }
    }
  }
}

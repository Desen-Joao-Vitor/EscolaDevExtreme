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
    // if (this.cepField.length < 9) {
    //   this.menssageErro = 'Cep deve conter no  minimo 8 caracteres ';
    //   return this.menssageErro;
    // } else {
    //   this.service.ConsultarCep(this.cepField.value).subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.error('Erro ao consultar CEP:', error);
    //     }
    //   );
    // }
  }

  formatarCPF(data: any) {
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
              console.log(this.cidadeField);
              this.cidadeField.editorOptions.value = 'Rio Verde';
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
      }
    }
  }
}

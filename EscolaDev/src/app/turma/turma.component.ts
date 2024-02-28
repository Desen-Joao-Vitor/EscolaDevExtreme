import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Turma, TurmaService } from './turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.scss',
})
export class TurmaComponent {
  dataSource: CustomStore; // service
  turma: Turma[];
  selectedRows!: number;
  nomeTurma: any;
  message: any;

  constructor(private service: TurmaService) {
    this.dataSource = service.getDataSource(); //comunicação de interação com o banco
    this.turma = service.getTurmas(); // /Aplicando nomes de turmos que são autorizados a coloca

    console.log(this.turma);
  }
  // Evento de selecionar o id da coluna
  onSelectionChanged(data: any) {
    this.selectedRows = data.selectedRowKeys;
  }
  // realizar delete no banco
  async delete() {
    if (Array.isArray(this.selectedRows)) {
      this.selectedRows.forEach((id: any) => {
        this.service.getDataSource().remove(id);
      });
      window.location.reload();
    }
  }

  validarNome() {
    if (this.nomeTurma.value.length <= 5) {
      this.message =
        'ERROR!! Nome da disciplina deve ter pelo menos 6 caracteres.';
      console.error(this.message);
    } else if (this.nomeTurma.value.trim() === '') {
      this.message = ' ERROR!! O campo não pode conter somente espaços ';
      console.error(this.message);
    }
  }
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow') {
      const defaulfnc = e.editorOptions.onValueChanged;

      switch (e.dataField) {
        case 'nome':
          {
            this.nomeTurma = e;
            const fnc = (ev: any) => {
              defaulfnc(ev);
              this.nomeTurma = ev;
              this.validarNome();
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';
import { __asyncValues } from 'tslib';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.componet.scss'],
})
export class DisciplinasComponent {
  dataSource: CustomStore; // service
  selectedRows!: number;
  nomeDisciplina: any;
  cargaHorariaDisciplina: any;
  message: any;

  constructor(private service: DisciplinasService) {
    this.dataSource = service.getDataSource(); //comunicação de interação com o banco
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
    if (this.nomeDisciplina.value.length <= 5) {
      this.message =
        'ERROR!! Nome da disciplina deve ter pelo menos 6 caracteres.';
      console.error(this.message);
    } else if (this.nomeDisciplina.value.trim() === '') {
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
            this.nomeDisciplina = e;
            const fnc = (ev: any) => {
              defaulfnc(ev);
              this.nomeDisciplina = ev;
              this.validarNome();
            };
            e.editorOptions.onValueChanged = fnc.bind(this);
          }
          break;
      }
    }
  }
}

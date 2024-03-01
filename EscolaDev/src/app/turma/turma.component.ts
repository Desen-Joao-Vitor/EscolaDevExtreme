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
  selectedRows!: number;
  nomeTurma: any;
  nomeTurno: any;
  message: any;

  constructor(private service: TurmaService) {
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
    if (this.nomeTurma.value.length < 1) {
      this.message =
        'ERROR!! Nome da disciplina deve ter pelo menos 1 caracteres.';
      console.error(this.message);
    } else if (this.nomeTurma.value.trim() === '') {
      this.message = ' ERROR!! O campo não pode conter somente espaços ';
      console.error(this.message);
    }
  }
  validaTurno() {
    const turno = this.nomeTurno.value.toUpperCase();

    if (turno != 'NOTURNO' && turno != 'VESPERTINO' && turno != 'MATUTINO') {
      console.error(
        'O tuno e invalido tente algo no tipo: MATUTINO ,  VESPERTINO ou NOTURNO '
      );
    }
    this.nomeTurno.component.option('value', turno);
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
        case 'turno': {
          this.nomeTurno = e;
          const fnc = (ev: any) => {
            defaulfnc(ev);
            this.nomeTurno = ev;
            this.validaTurno();
          };
          e.editorOptions.onValueChanged = fnc.bind(this);
        }
      }
    }
  }
}

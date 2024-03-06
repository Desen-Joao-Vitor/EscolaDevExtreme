import { AlunosService } from './../alunos-service';
import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { MatriculaService } from './matricula-services';
import { TurmaService } from '../../turma/turma.service';
import { GetsitucaomatriculaService } from '../../Apis/getsitucaomatricula/getsitucaomatricula.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent implements OnInit {
  //Service
  dataAluno: CustomStore;
  dataTurma: CustomStore;
  dataMatricula: CustomStore;
  dataSituacaoMatricula: CustomStore;

  //rescrever campo
  formAluno: any = {};
  formTurma: any = {};

  //formatar data
  dataAtual: Date = new Date();
  // dados do aluno
  dadosAluno: any = {};
  dadosTurma: any = {};
  selectedAlunoId: any;
  selectedTurmaId: any;
  selectedSituacaoId: any;

  // Aplicação
  constructor(
    serviceAluno: AlunosService,
    serviceTurma: TurmaService,
    serviceMatricula: MatriculaService,
    serviceSituacaoMatricula: GetsitucaomatriculaService,
    private datePipe: DatePipe
  ) {
    this.dataAluno = serviceAluno.getDataSource();
    this.dataTurma = serviceTurma.getDataSource();
    this.dataMatricula = serviceMatricula.getDataSource();
    this.dataSituacaoMatricula = serviceSituacaoMatricula.getDataSource();
  }

  ngOnInit(): void {}

  onAlunoSelectionChanged(event: any) {
    this.selectedAlunoId = event.value;

    // Preencher diretamente os dados do aluno no formData
    this.dadosAluno = this.dataAluno.byKey(this.selectedAlunoId);

    this.formAluno = {
      id: this.selectedAlunoId.id,
      nome: this.selectedAlunoId.nome,
      cpf: this.selectedAlunoId.cpf,
      // Adicione outros campos conforme necessário
    };
  }

  onTurmaSelectionChanged(event: any) {
    this.selectedTurmaId = event.value;
    // Preencher diretamente os dados do aluno no formData
    this.dadosTurma = this.dataTurma.byKey(this.selectedTurmaId);
    this.formTurma = {
      id: this.selectedTurmaId.id_turma,
      turno: this.selectedTurmaId.nome_turno,
      // Adicione outros campos conforme necessário
    };
  }
  onSituacaoSelectionChanged(event: any) {
    this.selectedSituacaoId = event.value;
  }

  formataDate() {
    this.dataAtual = this.formTurma.date;
    this.formTurma.date = this.datePipe.transform(this.dataAtual, 'yyyy/MM/dd');
  }

  onGerarMatricula() {
    this.formataDate();
    const matriculaData = {
      alunoId: this.selectedAlunoId.id,
      turmaId: this.selectedTurmaId.id_turma,
      situacao: this.selectedSituacaoId.id_situacao,
      dataAlteracao: this.formTurma.date,
    };
    console.log(matriculaData);

    // Chame o serviço para inserir os dados no banco de dados
    this.dataMatricula.insert(matriculaData).then(() => {
      console.log('Matrícula gerada com sucesso!');
      // Adicione qualquer lógica adicional após a inserção, se necessário
    });
  }
}

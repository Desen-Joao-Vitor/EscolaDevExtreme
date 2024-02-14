import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  states!: string[];

  employee: any = {
    nome: '',
    cpf: '',
    cidade: '',
    numero: '',
    bairro: '',
    estado: '',
    Rua: '',
    complemento: '',
    //Foto: '',
    observacao: '',
  };
  cpf: string = '';

  constructor(private cadastroService: CadastroService) {
    this.states = cadastroService.getState();
  }

  InserirFoto() {
    console.log('Foto');
  }
  Enviar() {
    this.cadastroService.inserirEmployee(this.employee).subscribe(
      (response: any) => {
        console.log('Dados inseridos com sucesso:', response);
        this.employee = {
          nome: '',
          cpf: '',
          cidade: '',
          numero: '',
          bairro: '',
          estado: '',
          Rua: '',
          complemento: '',
          //Foto: '',
          observacao: '',
        };
      },
      (error) => {
        console.error('Erro ao inserir dados:', error);
      }
    );
  }

  ngOnInit(): void {}

  formatarCPF(): any {
    // Remove caracteres não numéricos
    const numerosCpf = this.employee.cpf.replace(/\D/g, '');

    // Limita o comprimento do CPF para 11 dígitos
    const cpfFormatado = numerosCpf.slice(0, 11);

    // Formata o CPF com pontos e traço
    this.employee.cpf = cpfFormatado.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
  }
}

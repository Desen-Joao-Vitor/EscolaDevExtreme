import { Component } from '@angular/core';
import { CadastroService, Employee } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  InserirFoto() {
    console.log('Foto');
  }
  Enviar() {
    console.log('ola');
  }
  employee: Employee;

  positions: string[];

  states: string[];

  constructor(service: CadastroService) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.states = service.getStates();
  }

  cpf: string = '';

  formatarCPF(): any {
    // Remove caracteres não numéricos
    const numerosCpf = this.cpf.replace(/\D/g, '');

    // Limita o comprimento do CPF para 11 dígitos
    const cpfFormatado = numerosCpf.slice(0, 11);

    // Formata o CPF com pontos e traço
    this.cpf = cpfFormatado.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
  }
}

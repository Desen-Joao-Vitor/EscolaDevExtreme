import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-validar-cpf',
  styleUrls: ['./campo.component.css'],
  template: `
    <input
      class="campo"
      type="text"
      id="cpfInput"
      [(ngModel)]="cpf"
      (input)="formatarCPF()"
    />
  `,
  styles: [],
})
export class ValidarCpfComponent {
  cpf: string = '';

  formatarCPF(): void {
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

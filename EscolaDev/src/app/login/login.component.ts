import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  usuario = { email: null, senha: null };
  auxiliar: number = 1;
  Sussesso!: string;

  Cadastrados = [
    { usuario: 1, email: 'Teste1@gmail.com', senha: '123456789@' },
    { usuario: 2, email: 'Teste2@gmail.com', senha: '123456789@' },
    { usuario: 3, email: 'Teste3@gmail.com', senha: '123456789@' },
    { usuario: 4, email: 'Teste4@gmail.com', senha: '123456789@' },
  ];

  errorMessage: string = '';
  constructor(private router: Router) {}

  login() {
    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.usuario.email || this.usuario.email == ' ') {
      this.errorMessage = 'Campo não pode ser vazio!';
      return;
    } else if (!emailRegex.test(this.usuario.email)) {
      this.errorMessage = 'Email inválido!';
      return;
    }

    // Validação da senha
    const passwordRegex = /^(?=.*[@#$%^&+=])(?=.*[a-zA-Z0-9]).{8,}$/;
    if (!this.usuario.senha || this.usuario.senha == ' ') {
      this.errorMessage = 'O campo não pode ser vazio';
    } else if (!passwordRegex.test(this.usuario.senha)) {
      this.errorMessage =
        'Senha inválida! Deve conter pelo menos 8 caracteres, incluindo um caractere especial.';
      return;
    }

    // Verificar se o usuário existe
    const user = this.Cadastrados.find(
      (u) => u.email === this.usuario.email && u.senha === this.usuario.senha
    );
    if (user) {
      // Usuário encontrado, redirecionar para outra página ou realizar ação desejada

      this.Sussesso = 'Usuário autenticado! Redirecionando...';
      this.router.navigate(['/Menu']);
    } else {
      this.errorMessage = 'Usuário não encontrado!';
    }
  }
}

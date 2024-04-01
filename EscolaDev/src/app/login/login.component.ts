import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent  {
  dataUsuariosLogin: any = {};

  constructor(private serviceLonginUsuario: LoginService) {
    this.dataUsuariosLogin = serviceLonginUsuario.getDataSource();
  }
  Entrar() {
    // Enviar os dados do formulário para a API
    this.serviceLonginUsuario.verificarLogin(this.dataUsuariosLogin.value).subscribe(
      (response ) => {
        console.log('Resposta da API:', this.dataUsuariosLogin);

      },
      (error :any ) => {
        console.error(
          'Erro ao enviar dados para a API:',
          error,
          this.dataUsuariosLogin
        );
        // Tratar o erro conforme necessário
      }
    );
  }
}

//   // Verificar se o usuário existe
//   const user = this.Cadastrados.find(
//     (u) => u.email === this.usuario.email && u.senha === this.usuario.senha
//   );
//   if (user) {
//     // Usuário encontrado, redirecionar para outra página ou realizar ação desejada
//
//     this.Sussesso = 'Usuário autenticado! Redirecionando...';
//     this.router.navigate(['/Menu']);
//   } else {
//     this.errorMessage = 'Usuário não encontrado!';
//   }
// }
//  login() {
//    // Validação do email
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if (!this.usuario.email || this.usuario.email == ' ') {
//      this.errorMessage = 'Campo não pode ser vazio!';
//      return;
//    } else if (!emailRegex.test(this.usuario.email)) {
//      this.errorMessage = 'Email inválido!';
//      return;
//    }
//    // Validação da senha
//    const passwordRegex = /^(?=.*[@#$%^&+=])(?=.*[a-zA-Z0-9]).{8,}$/;
//    if (!this.usuario.senha || this.usuario.senha == ' ') {
//      this.errorMessage = 'O campo não pode ser vazio';
//    } else if (!passwordRegex.test(this.usuario.senha)) {
//      this.errorMessage =
//        'Senha inválida! Deve conter pelo menos 8 caracteres, incluindo um caractere especial.';
//      return;
//    }
//  }

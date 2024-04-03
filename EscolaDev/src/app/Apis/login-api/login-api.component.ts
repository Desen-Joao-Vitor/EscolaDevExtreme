import { Component, OnInit } from '@angular/core';
import { LoginApiService } from './login-api.service';

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrl: './login-api.component.scss',
})
export class LoginApiComponent {
  //  apiService: any;
  credenciais = {}; // dados do formulario

  constructor(private serviceLoginApi: LoginApiService) {}

  login() {
    console.log(this.credenciais);
    this.serviceLoginApi.login(this.credenciais).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log('Erro ao fazer login:', error);
      }
    );
  }
}

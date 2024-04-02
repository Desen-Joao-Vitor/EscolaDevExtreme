import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  dataUsuario: any = {};

  constructor(private service: LoginService) {}

  submitForm() {
    this.service.verificarLogin(this.dataUsuario);
  }
}

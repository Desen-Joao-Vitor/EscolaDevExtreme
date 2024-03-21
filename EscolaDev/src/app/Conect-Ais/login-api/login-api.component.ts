import { Component } from '@angular/core';
import { LoginApiRoutesModule } from './login-api.modulos.routes';
import { LoginApiService } from './login-api.service';

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrl: './login-api.component.scss',
})
export class LoginApiComponent {
  apiService: any;

  constructor(private serviceLoginApi: LoginApiService) {
    this.apiService = serviceLoginApi.getDataSource();
  }

  onSelectionChanged(data: any): void {
    console.log(data);

    /*this.serviceLoginApi.login(data).subscribe(
     (response: any) => {
       console.log(response);

     },
     (error: any) => {
       console.log('Erro ao fazer login:', error);
     }
   );
  }*/
  }
}

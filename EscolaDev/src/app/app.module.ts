import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { LoginModule } from './login/login.module';
import { DxSchedulerModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinasService } from './Disciplinas/disciplinas.service';
import { CadastroService } from './cadastro/cadastro.service';

import { ValidarCpfModule } from './cadastro/validar-cpf/validar-cpf.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { AlunoModule } from './aluno/aluno.module';
import { ListarService } from './aluno/listar-aluno/listar-aluno.service';
import { MatriculaService } from './aluno/matricula-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenuModule,
    LoginModule,
    DxSchedulerModule,
    ValidarCpfModule,
  ],
  providers: [DisciplinasService, CadastroService, MatriculaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

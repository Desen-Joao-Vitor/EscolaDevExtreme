import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule} from './Home/home.module';
import { LoginModule } from './login/login.module';
import { DxDataGridModule, DxSchedulerModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinasService } from './Disciplinas/Cadastro/disciplinas.service';

import { TurmaModule } from './turma/turma.module';
import { LoginApiModule } from './Apis/login-api/login-api.module';
import { GuardRoutes } from './AuthGuard/authguard';
import { AlunoModuleModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { DisciplinasModule } from './Disciplinas/Cadastro/disciplinas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    //Aplicação
    BrowserModule,
    HttpClientModule,
    //DevExtreme
    DxSchedulerModule,
    DxDataGridModule,
    //Modulos aplicação
    HomeModule,
    AlunoModuleModule,
    ProfessorModule,
    LoginModule,
    TurmaModule,
    DisciplinasModule,
    LoginApiModule,
  ],
  providers: [DisciplinasService, GuardRoutes],
  bootstrap: [AppComponent],
})
export class AppModule {}

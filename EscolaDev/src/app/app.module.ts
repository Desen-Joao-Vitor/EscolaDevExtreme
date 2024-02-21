import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { LoginModule } from './login/login.module';
import { DxDataGridModule, DxSchedulerModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinasService } from './Disciplinas/disciplinas.service';

import { AlunosService } from './aluno/alunos-service';
import { AlunoModule } from './aluno/aluno.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    //Aplicação
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //DevExtreme
    DxSchedulerModule,
    DxDataGridModule,
    //Modulos aplicação
    MenuModule,
    LoginModule,
    AlunoModule,
  ],
  providers: [DisciplinasService, AlunosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { LoginModule } from './login/login.module';
import { DxDataGridModule, DxSchedulerModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinasService } from './Disciplinas/Cadastro/disciplinas.service';

import { AlunosService } from './aluno/Cadastro/cadastro-service';
import { TurmaModule } from './turma/turma.module';
import { TurmaService } from './turma/turma.service';
import { MatriculaModule } from './aluno/matricula/matricula.module';
import { AlunoNotasModule } from './aluno/aluno-notas/aluno-notas.module';
import { AlunosNotasService } from './aluno/aluno-notas/aluno-notas.service';

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
    TurmaModule,
    MatriculaModule,

  ],
  providers: [DisciplinasService, AlunosService, TurmaService ],
  bootstrap: [AppComponent],
})
export class AppModule {}

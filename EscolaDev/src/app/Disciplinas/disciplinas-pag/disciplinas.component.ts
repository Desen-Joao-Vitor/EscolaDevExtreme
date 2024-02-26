import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplina.componet.scss'],
})
export class DisciplinasComponent implements OnInit {
  disciplina: any[] = [];

  constructor(private disciplinaService: DisciplinasService) {}

  ngOnInit(): void {
    this.getDisciplina();
  }

  getDisciplina(): void {
    this.disciplinaService.getDisciplinas().subscribe(
      (data: any) => {
        this.disciplina = data.data;
        console.log(this.disciplinaService);
      },
      (error: any) => {
        console.error('Erro ao obter matrículas:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../Disciplinas/disciplinas.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  disciplina: any[] = [];
  constructor(private service: DisciplinasService) {}

  getDisciplinas(): void {
    this.service.getDisciplinas().subscribe(
      (data: any) => {
        this.disciplina = data.data;
      },
      (error: any) => {
        console.error('Erro ao obter matrículas:', error);
      }
    );
  }
  ngOnInit(): void {
    this.getDisciplinas();
  }
}

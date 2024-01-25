import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../Disciplinas/disciplinas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  disciplina: any = [];

  constructor(private ServiceDisciplina: DisciplinasService) {}

  ngOnInit(): void {
    this.ServiceDisciplina.getDisciplinas().subscribe((data) => {
      console.log(data);
      this.disciplina = data.Disciplina;
    });
  }
}

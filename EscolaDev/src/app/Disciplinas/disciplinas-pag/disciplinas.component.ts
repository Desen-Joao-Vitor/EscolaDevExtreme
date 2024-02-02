import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Disciplina } from '../Disciplinas';
import DataSource from 'devextreme/data/data_source';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplina.componet.scss'],
})
export class DisciplinasComponent implements OnInit {
  data!: number;
  dataSource: DataSource;
  errorMessage: any;
  sucessoMessage: any;

  constructor(
    private disciplinasService: DisciplinasService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.dataSource = this.disciplinasService.getDataSouce();
  }

  ngOnInit(): void {}
}

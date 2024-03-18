import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../Disciplinas/Cadastro/disciplinas.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  dataSource: CustomStore;
  constructor(private service: DisciplinasService) {
    this.dataSource = service.getDataSource();
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../Disciplinas/Cadastro/disciplinas.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-menu',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
})
export class HomeComponent {
  dataSource: CustomStore;
  constructor(private service: DisciplinasService) {
    this.dataSource = service.getDataSource();
  }

}

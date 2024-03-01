import { Component, OnInit, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { MatriculaService } from '../../../aluno/matricula.service';
import { HttpClient } from '@angular/common/http';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.scss',
})
export class MatriculaComponent implements OnInit {
  @ViewChild('dataGrid', { static: false })
  dataGrid!: DxDataGridComponent;
  dataSource: CustomStore;

  constructor(private service: MatriculaService, private http: HttpClient) {
    this.dataSource = service.getDataSource();
  }
  ngOnInit(): void {
    console.log();
  }

  // Datagrid

  onSelectionChanged(data: any) {}
}

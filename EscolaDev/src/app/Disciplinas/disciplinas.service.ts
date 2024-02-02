import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Disciplina } from './Disciplinas';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private readonly API = 'http://localhost/Universidade-api/disciplina.php';
  private readonly dataSource: DataSource;

  constructor(private http: HttpClient) {
    const that = this;
    const isNotEmpty = (value: any) =>
      value !== undefined && value !== null && value !== '';

    this.dataSource = new DataSource(
      new CustomStore({
        key: 'id',
        async load(loadOptions: any) {
          const paramNames = [
            'skip',
            'take',
            'requireTotalCount',
            'requireGroupCount',
            'sort',
            'filter',
            'totalSummary',
            'group',
            'groupSummary',
          ];

          let params = new HttpParams();

          paramNames
            .filter((paramName) => isNotEmpty(loadOptions[paramName]))
            .forEach((paramName) => {
              params = params.set(
                paramName,
                JSON.stringify(loadOptions[paramName])
              );
            });

          try {
            const result: any = await lastValueFrom(
              that.http.get(that.API, { params })
            );

            return {
              data: result.data,
              totalCount: result.totalCount,
              summary: result.summary,
              groupCount: result.groupCount,
            };
          } catch (err) {
            throw new Error('Data Loading Error');
          }
        },
        async insert(values) {
          const result: any = await lastValueFrom(
            that.http.post(that.API, values)
          );
        },
        async update(key, values) {
          that.http.put(that.API + '?id=' + key, values);
        },
        async remove(key) {
          that.http.delete(that.API + '?id=' + key);
        },
      })
    );
  }

  getDataSouce() {
    return this.dataSource;
  }
  postDataSouse() {
    return new CustomStore();
  }

  // getDisciplinas(): Observable<Disciplina[]> {
  //   return this.http.get<Disciplina[]>(this.API).pipe(
  //     tap((data) => console.log('Dados obtidos:', data)),
  //     catchError((error) => {
  //       console.error('Erro ao obter disciplinas:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  /*  add(): Observable<Disciplina> {
    return this.http.<Disciplina[]>(this.API).pipe(tap((dados:any) =>
dados =
    ));
  }*/
}

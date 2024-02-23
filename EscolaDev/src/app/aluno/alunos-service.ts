import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';

// Estados
const estados: string[] = [];

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/alunos.php';
  protected dataSource: CustomStore;

  constructor(private http: HttpClient) {
    const that = this;
    const isNotEmpty = (value: any[]) => value !== undefined && value !== null;
    this.dataSource = new CustomStore({
      key: 'id',
      byKey: (key) => {
        return lastValueFrom(that.http.get(this.apiUrl + '?id=' + key));
      },

      async load(loadOptions: any) {
        const url = that.apiUrl;
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
            that.http.get(url, { params })
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
      insert(values) {
        return lastValueFrom(that.http.post(that.apiUrl, values));
      },
      update(key, values) {
        return lastValueFrom(that.http.put(that.apiUrl + '?id=' + key, values));

        //  const dataToUpdate = { id: key, ...values }; // Combine id with all other values
        //  return lastValueFrom(
        //    that.http.put(`${that.apiUrl}?id=${key}`, dataToUpdate)
        //  );
      },
      remove: (key: any) => {
        return new Promise<void>((resolve, reject) => {
          that.http.delete(that.apiUrl + '?id=' + key).subscribe(
            (response) => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        });
      },
    });
  }

  getDataSource() {
    return this.dataSource;
  }

  getState() {
    return estados;
  }

  ConsultarCep(cep: any): Observable<any> {
    return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
  }
}

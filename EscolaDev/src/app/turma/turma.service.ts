import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';

export class Turma {
  ID!: number;
  nometurno!: string;
}
const turmas: Turma[] = [
  {
    ID: 1,
    nometurno: 'Matutino',
  },
  {
    ID: 2,
    nometurno: 'Vespertino',
  },
  {
    ID: 3,
    nometurno: 'Noturno',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/turma.php';

  protected dataSource: CustomStore;
  dataChanged: EventEmitter<void> = new EventEmitter<void>();

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
      },
      remove: (id: any) => {
        return new Promise<void>((resolve, reject) => {
          that.http.delete(that.apiUrl + '?id=' + id).subscribe(
            (response) => {
              resolve();
              that.dataChanged.emit();
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
  getTurmas(): Turma[] {
    return turmas;
  }
}

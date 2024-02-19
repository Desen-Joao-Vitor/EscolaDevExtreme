import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/disciplina.php';
  private apiDelet =
    'http://localhost/API-Universidade/universidade-api/disciplina.php?id=';

  constructor(private http: HttpClient) {}

  getDisciplinas(): Observable<any> {
    return this.http.get(this.apiUrl); // Chama a URL diretamente sem filtro
  }

  /* getDisciplinas(filtro?: string): Observable<any> {
    const url = filtro ? `${this.apiUrl}?filtro=${filtro}` : this.apiUrl;
    return this.http.get(url);
  }*/

  adddisciplinas(disciplinasData: any): Observable<any> {
    return this.http.post(this.apiUrl, disciplinasData);
  }

  updatedisciplinas(id: number, disciplinasData: any): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.put(url, disciplinasData);
  }

  deletedisciplinas(id: number): Observable<any> {
    const url = `${this.apiDelet}${id}`;
    return this.http.delete(url);
  }
}

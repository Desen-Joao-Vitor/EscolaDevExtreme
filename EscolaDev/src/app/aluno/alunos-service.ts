import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/alunos.php';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /* getAlunos(filtro?: string): Observable<any> {
    const url = filtro ? `${this.apiUrl}?filtro=${filtro}` : this.apiUrl;
    return this.http.get(url);
  }*/

  /* addalunos(alunosData: any): Observable<any> {
    return this.http.post(this.apiUrl, alunosData);
  }

  updatealunos(id: number, alunosData: any): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.put(url, alunosData);
  }

  deletealunos(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete(url);
  }*/
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/matricula.php';

  constructor(private http: HttpClient) {}

  getMatriculas(): Observable<any> {
    return this.http.get(this.apiUrl); // Chama a URL diretamente sem filtro
  }

  /* getMatriculas(filtro?: string): Observable<any> {
    const url = filtro ? `${this.apiUrl}?filtro=${filtro}` : this.apiUrl;
    return this.http.get(url);
  }*/

  addMatricula(matriculaData: any): Observable<any> {
    return this.http.post(this.apiUrl, matriculaData);
  }

  updateMatricula(id: number, matriculaData: any): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.put(url, matriculaData);
  }

  deleteMatricula(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete(url);
  }
}

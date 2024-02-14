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

  addAluno(alunoData: any): Observable<any> {
    return this.http.post(this.apiUrl, alunoData);
  }

  updateAluno(id: number, alunoData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, alunoData);
  }

  deleteAluno(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

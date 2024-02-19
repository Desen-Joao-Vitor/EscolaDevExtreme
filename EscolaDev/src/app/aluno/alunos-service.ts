import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { response } from 'express';
import { AnyObject } from 'mongoose';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/alunos.php';
  private apiDelet =
    'http://localhost/API-Universidade/universidade-api/alunos.php?id=';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  /* updateAluno(id: number, alunoData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, alunoData);
  }*/

  deleteAluno(id: number) {
    const url = `${this.apiDelet}${id}`;
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(`Erro ao excluir aluno com ID ${id}:`, error);
        return throwError(
          'Erro na requisição. Verifique o console para mais detalhes.'
        );
      })
    );
  }
}

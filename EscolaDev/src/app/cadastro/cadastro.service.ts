import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const estados: string[] = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  State!: string;
  getState() {
    return estados;
  }
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/alunos.php';

  constructor(private http: HttpClient) {}

  inserirEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.apiUrl, employeeData);
  }
}

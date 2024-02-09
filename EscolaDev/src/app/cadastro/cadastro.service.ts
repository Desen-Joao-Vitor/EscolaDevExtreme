import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const states: string[] = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  State!: string;
  getState() {
    return states;
  }
  private apiUrl =
    'http://localhost/API-Universidade/universidade-api/alunos.php';

  constructor(private http: HttpClient) {}

  inserirEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.apiUrl, employeeData);
  }
}

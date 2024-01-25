import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
})
export class DisciplinasComponent implements OnInit {
  private disciplinasUrl = '../../assets/Disciplinas.json';

  disciplinas: any = [];
  disciplinaForm: FormGroup;
  data!: any;

  constructor(
    private disciplinasService: DisciplinasService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.disciplinaForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      professor: [''],
      cargaHoraria: [0, Validators.min(0)],
      ano: [''],
    });
  }
  adicionarDisciplina(novaDisciplina: any): Observable<any> {
    return this.http.get(this.disciplinasUrl).pipe(
      // Transforma os dados
      map((data: any) => {
        // Adiciona a nova disciplina aos dados existentes
        data.Disciplina.push(novaDisciplina);

        // Atualiza o arquivo JSON
        this.http.put(this.disciplinasUrl, data).subscribe();

        return data;
      })
    );
  }
  ngOnInit(): void {
    this.carregarDisciplinas();
  }
  ngSubmit() {}

  carregarDisciplinas() {
    this.disciplinasService.getDisciplinas().subscribe((data: any) => {
      this.disciplinas = data.Disciplina;
    });
  }

  editarDisciplina(index: number) {
    const disciplinaSelecionada = this.disciplinas[index];
    this.disciplinaForm.patchValue(disciplinaSelecionada);
  }

  atualizarDisciplina() {
    const disciplinaAtualizada = this.disciplinaForm.value;
    // Lógica para enviar a disciplina atualizada para o backend (se necessário)
    // this.disciplinasService.atualizarDisciplina(disciplinaAtualizada).subscribe(...);
    this.resetarFormulario();
  }

  resetarFormulario() {
    this.disciplinaForm.reset();
  }
  excluirDisciplina(arg0: any) {}
}

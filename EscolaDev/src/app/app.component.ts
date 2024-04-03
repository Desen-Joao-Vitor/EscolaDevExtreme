import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  redirectToLogin() {
    this.router.navigate(['/Login']);
  }

  navegaAlunos(event: any) {
    const rotaSelecionada = event.target.value;
    this.router.navigate(['Alunos', rotaSelecionada]);
  }
  navegaProfessor(event: any) {
    const rotaSelecionada = event.target.value;
    this.router.navigate(['Professor', rotaSelecionada]);
  }
}

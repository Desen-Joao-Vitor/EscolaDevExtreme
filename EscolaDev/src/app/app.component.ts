import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    document
      .getElementById('navSelect')
      ?.addEventListener('mouseover', function () {
        this.focus;
      });
  }
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

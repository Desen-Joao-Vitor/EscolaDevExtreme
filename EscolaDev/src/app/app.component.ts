import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'EscolaDev';
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  navega(event: any) {
    const selectedRoute = event.target.value;
    this.router.navigate([selectedRoute]);
  }
}

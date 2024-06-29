import { Component } from '@angular/core';
import { AuthService } from '../services/login.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Inscription réussie', response);
      },
      error => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}

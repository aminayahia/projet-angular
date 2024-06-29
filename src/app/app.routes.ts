import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { ListeSallesComponent } from './liste-salles/liste-salles.component';
import { DetailSalleComponent } from './detail-salle/detail-salle.component';
import { AjoutSalleComponent } from './ajout-salle/ajout-salle.component';
import { ModificationSalleComponent } from './modification-salle/modification-salle.component';
import { ListeReservationsComponent } from './liste-reservations/liste-reservations.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';
import { ModificationReservationComponent } from './modification-reservation/modification-reservation.component';
import { CalendrierReservationsComponent } from './calendrier-reservations/calendrier-reservations.component';

export const appRoutes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'salles', component: ListeSallesComponent },
  { path: 'salles/:id', component: DetailSalleComponent },
  { path: 'ajout-salle', component: AjoutSalleComponent },
  { path: 'modification-salle/:id', component: ModificationSalleComponent },
  { path: 'reservations', component: ListeReservationsComponent },
  { path: 'reservations/:id', component: DetailReservationComponent },
  { path: 'ajout-reservation', component: AjoutReservationComponent },
  { path: 'modification-reservation/:id', component: ModificationReservationComponent },
  { path: 'calendrier-reservations', component: CalendrierReservationsComponent },
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: '**', redirectTo: '/connexion' }
];

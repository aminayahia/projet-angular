import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { ListeSallesComponent } from './liste-salles/liste-salles.component';
import { DetailSalleComponent } from './detail-salle/detail-salle.component';
import { AjoutSalleComponent } from './ajout-salle/ajout-salle.component';
import { ModificationSalleComponent } from './modification-salle/modification-salle.component';
import { ListeReservationsComponent } from './liste-reservations/liste-reservations.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';
import { ModificationReservationComponent } from './modification-reservation/modification-reservation.component';
import { CalendrierReservationsComponent } from './calendrier-reservations/calendrier-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
   LoginComponent,
    ListeSallesComponent,
    DetailSalleComponent,
    AjoutSalleComponent,
    ModificationSalleComponent,
    ListeReservationsComponent,
    DetailReservationComponent,
    AjoutReservationComponent,
    ModificationReservationComponent,
    CalendrierReservationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

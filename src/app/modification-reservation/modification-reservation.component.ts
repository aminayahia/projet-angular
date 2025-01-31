import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-modification-reservation',
  templateUrl: './modification-reservation.component.html',
  styleUrls: ['./modification-reservation.component.css']
})
export class ModificationReservationComponent implements OnInit {
  reservation: any;

  constructor(
    private route: ActivatedRoute,
    private reservationsService: ReservationsService
  ) {}

  ngOnInit() {
    this.getDetailReservation();
  }

  getDetailReservation() {
    const idReservation = this.route.snapshot.params['id'];
    this.reservationsService.getReservation(idReservation).subscribe(
      (data: any) => {
        this.reservation = data;
      },
      error => {
        console.error('Erreur  ', error);
      }
    );
  }

  modifierReservation() {
    this.reservationsService.updateReservation(this.reservation._id, this.reservation).subscribe(
      () => {
        console.log('Réservation modifiée avec succès.');
      },
      error => {
        console.error('Erreur lors de la modification de la réservation : ', error);
      }
    );
  }
}

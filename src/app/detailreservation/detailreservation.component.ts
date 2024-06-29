import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detailreservation.component.html',
  styleUrls: ['./detailreservation.component.css']
})
export class DetailReservationComponent implements OnInit {
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
        console.error('Erreur  : ', error);
      }
    );
  }
}

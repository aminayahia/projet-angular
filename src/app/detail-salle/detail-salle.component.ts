import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SallesService } from '../services/salles.service';

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent implements OnInit {
  salle: any;

  constructor(
    private route: ActivatedRoute,
    private sallesService: SallesService
  ) {}

  ngOnInit() {
    this.getDetailSalle();
  }

  getDetailSalle() {
    const idSalle = this.route.snapshot.params['id'];
    this.sallesService.getSalle(idSalle).subscribe(
      (data: any) => {
        this.salle = data;
      },
      error => {
        console.error('Erreur  : ', error);
      }
    );
  }
}

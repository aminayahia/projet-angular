import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SallesService } from '../services/salles.service';

@Component({
  selector: 'app-modification-salle',
  templateUrl: './modification-salle.component.html',
  styleUrls: ['./modification-salle.component.css']
})
export class ModificationSalleComponent implements OnInit {
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
        console.error('Erreur lors de la récupération des détails de la salle : ', error);
      }
    );
  }

  modifierSalle() {
    this.sallesService.updateSalle(this.salle._id, this.salle).subscribe(
      () => {
        console.log('Salle modifiée avec succès.');
        // Ajoutez ici la redirection ou d'autres actions après la modification de la salle
      },
      error => {
        console.error('Erreur lors de la modification de la salle : ', error);
      }
    );
  }
}

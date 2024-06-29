import { Component, OnInit } from '@angular/core';
import { SallesService } from '../services/salles.service';

@Component({
  selector: 'app-liste-salles',
  templateUrl: './liste-salles.component.html',
  styleUrls: ['./liste-salles.component.css']
})
export class ListeSallesComponent implements OnInit {
  salles: any[] = [];

  constructor(private sallesService: SallesService) {}

  ngOnInit() {
    this.getSalles();
  }

  getSalles() {
    this.sallesService.getSalles().subscribe(
      (data: any[]) => {
        this.salles = data;
      },
      error => {
        console.error('Erreur : ', error);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SallesService {
  private baseUrl = 'http://localhost:5000/api/salles';

  constructor(private http: HttpClient) {}

  getSalles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getSalle(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addSalle(salle: any): Observable<any> {
    return this.http.post(this.baseUrl, salle);
  }

  updateSalle(id: string, salle: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, salle);
  }
}

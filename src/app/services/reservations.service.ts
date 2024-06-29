import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private baseUrl = 'http://localhost:5000/api/reservations';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getReservation(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addReservation(reservation: any): Observable<any> {
    return this.http.post(this.baseUrl, reservation);
  }

  updateReservation(id: string, reservation: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, reservation);
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

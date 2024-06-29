import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:5000/api/auth/register';
  private loginUrl = 'http://localhost:5000/api/auth/login';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}

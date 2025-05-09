import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // or your backend URL

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}

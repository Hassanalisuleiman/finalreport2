// src/app/services/sheha.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShehaService {
  shehas:any;
  private apiUrl = 'http://localhost:5000/api/shehas';

  constructor(private http: HttpClient) {}

  // Method to get the list of Shehas
  getShehas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


// src/app/services/addressee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddresseeService {
  private apiUrl = 'http://localhost:5000/api/addressees';

  constructor(private http: HttpClient) { }

  getAddressees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createAddressee(addressee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, addressee);
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandService {
  landRecords:any;
  private apiUrl = 'http://localhost:5000/api/landrecords'; // URL to web API

  constructor(private http: HttpClient) {}

  // Get all land records
  getAllLand(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get a land record by ID
  getLandById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Create a new land record
  createLand(landRecord: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, landRecord);
  }

  // Update a land record
  updateLand(id: number, landRecord: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, landRecord);
  }

  // Delete a land record
  deleteLand(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

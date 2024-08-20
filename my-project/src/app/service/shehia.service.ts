import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Shehia {
  id: number;
  name: string;
  // Add other properties if necessary
}

@Injectable({
  providedIn: 'root'
})
export class ShehiaService {
  private apiUrl = 'http://localhost:5000/api/shehia'; // Replace with your actual server URL

  constructor(private http: HttpClient) { }

  // Create a new Shehia
  createShehia(shehia: Shehia): Observable<Shehia> {
    return this.http.post<Shehia>(this.apiUrl, shehia);
  }

  // Get all Shehias
  getAllShehias(): Observable<Shehia[]> {
    return this.http.get<Shehia[]>(this.apiUrl);
  }

  // Get a specific Shehia by ID
  getShehiaById(id: number): Observable<Shehia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Shehia>(url);
  }

  // Update a Shehia by ID
  updateShehia(id: number, shehia: Shehia): Observable<Shehia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Shehia>(url, shehia);
  }

  // Delete a Shehia by ID
  deleteShehia(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


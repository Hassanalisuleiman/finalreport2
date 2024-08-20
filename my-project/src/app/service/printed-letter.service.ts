import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define the interface for PrintedLetter
export interface User {
  first_name: string;
  last_name: string;
  phone_no: string;
  house_no: string;
}

export interface PrintedLetter {
User: any;
  letter_id?: number;
  letterType: string;
  organizationName: string;
  poBox: string;
  country?: string;
  user_id: number;
  date?: string;
  additionalName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrintedLetterService {
  getLetterDetails() {
    throw new Error('Method not implemented.');
  }

  private apiUrl: string = "http://localhost:5000/api/letterss";

  constructor(private http: HttpClient) { }
  getLetterTemplates() {
    return [
      { id: 1, name: 'Passport Request Letter', template: 'passport-request-letter' },
      { id: 2, name: 'Visa Application Letter', template: 'visa-application-letter' },
      { id: 3, name: 'Uthibitisho wa ukaazi',template: 'uthibitisho wa ukaazi'},
      { id: 4, name: 'Kupoteza kitambulisho',template: 'kupoteza kitambulisho'},
      { id: 5, name: 'Umiliki wa nyumba/kiwanja',template: 'umiliki wa nyumba/kiwanja'},
      // Add more letter types as needed
    ];
  }

  getDefaultCountry() {
    return 'Tanzania';
  }

  getDefaultDate() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  }

  // Get all printed letters
  getAll(): Observable<PrintedLetter[]> {
    return this.http.get<PrintedLetter[]>(this.apiUrl);
  }

  // Get a printed letter by ID
  getById(id: number): Observable<PrintedLetter> {
    return this.http.get<PrintedLetter>(`${this.apiUrl}/${id}`);
  }

  // Create a new printed letter
  post(body: PrintedLetter): Observable<PrintedLetter> {
    return this.http.post<PrintedLetter>(this.apiUrl, body);
  }

  // Update a printed letter by ID
  putById(id: number, body: PrintedLetter): Observable<PrintedLetter> {
    return this.http.put<PrintedLetter>(`${this.apiUrl}/${id}`, body);
  }

  // Delete a printed letter by ID
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

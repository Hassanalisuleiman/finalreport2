import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  citizens:any;
  private apiUrl:string = "http://localhost:5000/api/citizens";

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  post(body: any): Observable<any> {
    return this.http.post(this.apiUrl, body);
  }

  putById(id: number, body: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, body);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

// src/app/services/letter-template.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterTemplateService {
  private apiUrl = 'http://localhost:5000/api/lettertemplates';

  constructor(private http: HttpClient) { }

  getLetterTemplates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createLetterTemplate(template: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, template);
  }
}


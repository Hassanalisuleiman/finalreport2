import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GovernmentOrderService {
  private apiUrl = 'http://localhost:5000/api/governmentorders';

  constructor(private http: HttpClient) { }

  // Create a new government order
  createGovernmentOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, order);
  }

  // Get all government orders
  getAllGovernmentOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Get a government order by ID
  getGovernmentOrderById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Update a government order
  updateGovernmentOrder(id: number, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, order);
  }

  // Delete a government order
  deleteGovernmentOrder(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


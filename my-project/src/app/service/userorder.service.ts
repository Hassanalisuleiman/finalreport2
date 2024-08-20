import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserorderService {
  citizenOrders:any
  private apiUrl = 'http://localhost:5000/api/userorders';

  constructor(private http: HttpClient) { }

  // Get all CitizenOrders
  getAllCitizenOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Create a new CitizenOrder
  createCitizenOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, order);
  }

  // Update a specific CitizenOrder
  updateCitizenOrder(id: number, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, order);
  }

  // Update the status of a specific CitizenOrder
  updateOrderStatus(userOrderId: number, received: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-status/${userOrderId}`, { received });
  }

  // Get Citizens who have not received a specific order
  getCitizensWithoutOrder(orderId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/not-received/${orderId}`);
  }
  updateCitizenOrderStatus(userOrderId: number, received: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userOrderId}/status`, { received });
  }
}

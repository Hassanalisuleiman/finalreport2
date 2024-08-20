import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  private tokenKey = 'auth_token';
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  private userNameSubject = new BehaviorSubject<{ firstName: string | null, lastName: string | null }>({ firstName: null, lastName: null });

  constructor(private http: HttpClient) {
    this.loadToken();  // Initialize user data if token exists on service load
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
        this.decodeToken(response.token);
      }),
      catchError(err => {
        console.error('Login error', err);
        return of(null);
      })
    );
  }

  private decodeToken(token: string): void {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.userRoleSubject.next(payload.user.role);
      this.userNameSubject.next({ firstName: payload.user.first_name, lastName: payload.user.last_name });
    } catch (e) {
      console.error('Error decoding token', e);
      this.logout();
    }
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  getRole(): Observable<string | null> {
    return this.userRoleSubject.asObservable();
  }

  getUserName(): Observable<{ firstName: string | null, lastName: string | null }> {
    return this.userNameSubject.asObservable();
  }

  // logout(): void {
  //   localStorage.removeItem(this.tokenKey);
  //   this.userRoleSubject.next(null);
  //   this.userNameSubject.next({ firstName: null, lastName: null });
  // }
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private loadToken(): void {
    const token = this.getToken();
    if (token) {
      this.decodeToken(token);
    }
  }
}

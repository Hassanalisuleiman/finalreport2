import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  private tokenKey: string = 'authToken'; // Update with your actual token key
  public userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public userNameSubject: BehaviorSubject<{ firstName: string | null, lastName: string | null }> = new BehaviorSubject<{ firstName: string | null, lastName: string | null }>({ firstName: null, lastName: null });

constructor( private authservice: AuthService, private router: Router){}

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  userName: string | null = null;
  userRole: string | null = null;
  role: any;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user ? user.first_name : 'Guest'; // Set to 'Guest' if the user name is not found
    this.userRole = user ? user.role : null; // Retrieve the role from the user data
    this.role = this.userRole;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isSheha(): boolean {
    return this.userRole === 'sheha';
  }

  isCitizen(): boolean {
    return this.userRole === 'citizen';
  }

   // Logout user
   logoutUser(): void {
    this.authservice.logout().subscribe(
      response => {
        console.log('User logged out successfully', response);
        // Clear local storage and update subjects
        localStorage.removeItem(this.tokenKey);
        this.userRoleSubject.next(null);
        this.userNameSubject.next({ firstName: null, lastName: null });
        this.router.navigateByUrl('/login');
        // Optionally redirect to login page or homepage
        // this.router.navigate(['/login']); // Uncomment if using Angular Router
      },
      error => {
        console.error('Error logging out user', error);
      }
    );
  }
}

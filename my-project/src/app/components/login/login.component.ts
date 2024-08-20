import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, of } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  loading = false;
  success = false;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  onSubmit(): void {
    this.loading = true;
    this.success = false; // Reset success state before login attempt
    const { username, password } = this.credentials;

    const loadingDuration$ = of(true).pipe(delay(4000));
    const login$ = this.authService.login(username, password).pipe(
      catchError(() => {
        this.success = false;
        return of(null);
      })
    );

    forkJoin([login$, loadingDuration$]).subscribe(([loginResponse]) => {
      this.loading = false;

      if (loginResponse) {
        this.success = true;

        // Store the entire user object in local storage
        localStorage.setItem('user', JSON.stringify(loginResponse.user));
        
        // Store the token in local storage
        localStorage.setItem('token', loginResponse.token);

        this.authService.getRole().subscribe(role => {
          if (role) {
            // Store the user role in local storage
            localStorage.setItem('role', role);

            this.snackBar.open('Successfully logged in!', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['snack-bar-success'] // Apply success styles
            });

            // Navigate to the dashboard
            this.router.navigate(['/dashboard']);
          }
        });
      } else {
        this.snackBar.open('Incorrect username or password', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snack-bar-error'] // Apply error styles
        });
      }
    });
  }
}

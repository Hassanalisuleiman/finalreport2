import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { finalize } from 'rxjs/operators';
import { ShehiaService } from '../../service/shehia.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    status: '',
    street: '',
    house_no: '',
    gender: '',
    phone_no: '',
    zan_id: '',
    tz_id: '',
    shehia_id: null,
    role: 'citizen' // default role
  };

  isLoading = false;
  message: string | null = null;
  isSuccess = false;
  shehias: any[] = [];

  constructor(private userService: UserService, private router: Router, private shehiaService: ShehiaService) { }
  ngOnInit(): void {
    this.loadShehias(); // Load shehias on component initialization
  }
  loadShehias(): void {
    this.shehiaService.getAllShehias().subscribe(
      data => {
        this.shehias = data;
      },
      error => {
        console.error('Error loading shehias', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.user.shehia_id) {
      this.message = 'Please select a valid Shehia.';
      this.isSuccess = false;
      return;
    }
  
    this.isLoading = true;
    this.message = null;
  
    this.userService.post(this.user).pipe(
      finalize(() => {
        this.isLoading = false;
        if (this.isSuccess) {
          this.message = 'Registration successful!';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.message = 'Registration failed. Please try again.';
        }
      })
    ).subscribe({
      next: () => {
        this.isSuccess = true;
      },
      error: () => {
        this.isSuccess = false;
      }
    });
  }
  
}

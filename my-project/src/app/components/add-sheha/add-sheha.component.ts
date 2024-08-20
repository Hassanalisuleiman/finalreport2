import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ShehiaService } from '../../service/shehia.service';
import { finalize } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add-sheha',
  templateUrl: './add-sheha.component.html',
  styleUrl: './add-sheha.component.css'
})
export class AddShehaComponent implements OnInit{

  user = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    status: '',
    role: 'sheha', // default role
    shehia_id: null // Foreign key to store the selected shehia_id
  };

  isLoading = false;
  message: string | null = null;
  isSuccess = false;
  shehias: any[] = []; // Array to store shehias

  constructor(private userservice: UserService, private router: Router) { }


  ngOnInit(): void {
    // this.loadShehias();
  }

  // loadShehias(): void {
  //   this.shehiaService.getAllShehias().subscribe(
  //     data => {
  //       console.log('Loaded shehias:', data);  // Check what data is being returned
  //       this.shehias = data;
  //     },
  //     error => {
  //       console.error('Error loading shehias', error);
  //     }
  //   );
  // }
  

  onSubmit(): void {
    if (!this.user.shehia_id) {
      this.message = 'Please select a valid Shehia.';
      this.isSuccess = false;
      return;
    }
  
    this.isLoading = true;
    this.message = null;
  
    this.userservice.post(this.user).pipe(
      finalize(() => {
        this.isLoading = false;
        if (this.isSuccess) {
          this.message = 'Registration successful!';
          setTimeout(() => {
            this.router.navigate(['/registersheha']);
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

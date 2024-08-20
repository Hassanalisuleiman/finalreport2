import { Component, OnInit } from '@angular/core';
import { BirthService } from '../../service/birth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-birth-registration',
  templateUrl: './birth-registration.component.html',
  styleUrls: ['./birth-registration.component.css']  // Correct the property to styleUrls
})
export class BirthRegistrationComponent implements OnInit {
  submitForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private birthService: BirthService, 
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {
    this.submitForm = this.fb.group({
      father_name: [''],
      mother_name: [''],
      child_name: [''],
      date_of_birth: [''],
      merit_status: [''],
      user_id: ['']
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    if (this.submitForm.valid) {
      const submitbirth = this.submitForm.value;
      console.log(submitbirth);
      this.birthService.post(submitbirth).subscribe(
        response => {
          this.snackBar.open('Birth registration successful!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']  // Custom class for styling
          });
          this.router.navigateByUrl('/birthhome');
        },
        error => {
          this.snackBar.open('Birth registration failed!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['error-snackbar']  // Custom class for styling
          });
        }
      );
    }
  }
}

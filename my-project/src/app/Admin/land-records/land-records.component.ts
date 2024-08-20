import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LandService } from '../../service/land.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-land-records',
  templateUrl: './land-records.component.html',
  styleUrls: ['./land-records.component.css']  // Corrected to styleUrls
})
export class LandRecordsComponent {
  submitForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private landService: LandService,
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {
    this.submitForm = this.fb.group({
      from_owner: ['', Validators.required],
      to_owner: ['', Validators.required],
      boundary_north: ['', Validators.required],
      boundary_south: ['', Validators.required],
      boundary_east: ['', Validators.required],
      boundary_west: ['', Validators.required],
      form_number: ['', Validators.required],
      user_id: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.submitForm.valid) {
      const submitLand = this.submitForm.value;
      console.log(submitLand);
      this.landService.createLand(submitLand).subscribe(
        (response: any) => {
          this.snackBar.open('Land record created successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']
          });
          this.router.navigateByUrl('/homeLand');
        },
        (error) => {
          this.snackBar.open('Failed to create land record. Please try again.', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      this.snackBar.open('Please fill out all required fields.', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['error-snackbar']
      });
    }
  }
}

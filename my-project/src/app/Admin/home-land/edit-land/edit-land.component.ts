import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LandService } from '../../../service/land.service';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-edit-land',
  templateUrl: './edit-land.component.html',
  styleUrls: ['./edit-land.component.css']
})
export class EditLandComponent implements OnInit {
  editForm!: FormGroup;
  landRecord: any = {};

  constructor(
    private fb: FormBuilder,
    private landService: LandService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {
    this.editForm = this.fb.group({
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

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.landService.getLandById(id).subscribe(
        (response: any) => {
          this.landRecord = response;
          // Populate the form with the existing data
          this.editForm.patchValue(this.landRecord);
        },
        (error) => {
          console.error('Error fetching land record:', error);
          this.snackBar.open('Failed to load land record. Please try again.', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      console.error('No ID provided in the route.');
    }
  }

  updateLand(): void {
    if (this.editForm.valid) {
      this.landService.updateLand(this.landRecord.land_id, this.editForm.value).subscribe(
        () => {
          this.snackBar.open('Land record updated successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/homeLand']);
        },
        (error) => {
          console.error('Error updating land record:', error);
          this.snackBar.open('Failed to update land record. Please try again.', 'Close', {
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

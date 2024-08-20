import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisasterService } from '../../service/disaster.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-desaster',
  templateUrl: './desaster.component.html',
  styleUrls: ['./desaster.component.css']
})
export class DesasterComponent implements OnInit {
  submitForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private disasterService: DisasterService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {
    this.submitForm = this.fb.group({
      user_id: ['', Validators.required],
      cause: ['', Validators.required],
      effect: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    if (this.submitForm.valid) {
      const submitDisaster = this.submitForm.value;
      console.log('Form Data =>', submitDisaster);

      this.disasterService.postData(submitDisaster).subscribe(
        (response) => {
          console.log('Response =>', response);
          this.snackBar.open('Disaster record saved successfully!', 'Close', {
            duration: 3000, // Duration in milliseconds
            verticalPosition: 'top', // Position at the top
            horizontalPosition: 'right', // Position at the right
            panelClass: ['success-snackbar'] // Custom CSS class for styling
          });
          this.router.navigateByUrl('/desastershome');
        },
        (error) => {
          console.error('Error =>', error);
          this.snackBar.open('An error occurred while saving the disaster record.', 'Close', {
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
        panelClass: ['warning-snackbar']
      });
    }
  }
}

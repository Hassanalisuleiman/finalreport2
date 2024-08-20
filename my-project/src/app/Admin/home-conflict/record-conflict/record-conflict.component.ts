import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConflictRecordService } from '../../../service/conflict-record.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-record-conflict',
  templateUrl: './record-conflict.component.html',
  styleUrls: ['./record-conflict.component.css']
})
export class RecordConflictComponent implements OnInit {

  submitForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private conflictRecordService: ConflictRecordService,
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {}

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      characters: ['', Validators.required],
      reasons: ['', Validators.required],
      solutions: ['', Validators.required],
      user_id: ['', Validators.required],
      status: ['Pending', Validators.required],
    });
  }

  onSubmit() {
    if (this.submitForm.valid) {
      this.conflictRecordService.post(this.submitForm.value).subscribe(
        () => {
          this.snackBar.open('Conflict record saved successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/homeconflicts']);
        },
        (error) => {
          this.snackBar.open('Failed to save conflict record. Please try again.', 'Close', {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeathService } from '../../service/death.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-record-death',
  templateUrl: './record-death.component.html',
  styleUrls: ['./record-death.component.css']
})
export class RecordDeathComponent implements OnInit {
  submitForm!: FormGroup;
  post: any;

  constructor(
    private fb: FormBuilder,
    private deathService: DeathService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.submitForm = this.fb.group({
      corpse_name: [''],
      date_of_death: [''],
      causes_of_death: [''],
      user_id: ['']
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    if (this.submitForm.valid) {
      const submitDeath = this.submitForm.value;
      console.log(submitDeath);
      this.deathService.post(submitDeath).subscribe(
        response => {
          this.snackBar.open('Death record saved successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']
          });
          this.router.navigateByUrl('/homedeath');
        },
        error => {
          this.snackBar.open('Failed to save death record', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  }
}

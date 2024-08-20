import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DisasterService } from '../../../service/disaster.service';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-edit-desaster',
  templateUrl: './edit-desaster.component.html',
  styleUrls: ['./edit-desaster.component.css']
})
export class EditDesasterComponent implements OnInit {
  disasterRecord: any;

  constructor(
    private fb: FormBuilder,
    private disasterService: DisasterService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.disasterService.getById(id).subscribe(
      (response: any) => {
        this.disasterRecord = response;
      },
      (error) => {
        this.snackBar.open('Failed to load disaster record.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  updateDisaster(): void {
    this.disasterService.putById(this.disasterRecord.disaster_id, this.disasterRecord).subscribe(
      () => {
        this.snackBar.open('Disaster record updated successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/desastershome']);
      },
      (error) => {
        this.snackBar.open('Failed to update disaster record.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}

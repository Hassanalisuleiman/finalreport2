import { Component, OnInit } from '@angular/core';
import { ConflictRecordService } from '../../../service/conflict-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-edit-conflict',
  templateUrl: './edit-conflict.component.html',
  styleUrls: ['./edit-conflict.component.css']  // Corrected to styleUrls
})
export class EditConflictComponent implements OnInit {
  conflictRecord: any = {};

  constructor(
    private conflictRecordService: ConflictRecordService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.conflictRecordService.getById(id).subscribe(
      (response: any) => {
        this.conflictRecord = response;
      },
      (error) => {
        this.snackBar.open('Failed to load conflict record.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  updateConflictRecord(): void {
    this.conflictRecordService.putById(this.conflictRecord.conflict_id, this.conflictRecord).subscribe(
      () => {
        this.snackBar.open('Conflict record updated successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/homeconflicts']);
      },
      (error) => {
        this.snackBar.open('Failed to update conflict record. Please try again.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}

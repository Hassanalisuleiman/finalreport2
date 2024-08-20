import { Component, OnInit } from '@angular/core';
import { ConflictRecordService } from '../../service/conflict-record.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; // Import your ConfirmDialogComponent

@Component({
  selector: 'app-home-conflict',
  templateUrl: './home-conflict.component.html',
  styleUrls: ['./home-conflict.component.css']
})
export class HomeConflictComponent implements OnInit {
  displayedColumns: string[] = ['id', 'characters', 'reasons', 'solutions', 'actions'];
  conflicts: any;

  constructor(
    private conflictService: ConflictRecordService,
    private router: Router,
    private snackBar: MatSnackBar,  // Inject MatSnackBar
    private dialog: MatDialog  // Inject MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllConflicts();
  }

  getAllConflicts() {
    this.conflictService.getAll().subscribe(
      (response: any) => {
        console.log('my data', response);
        this.conflicts = response;
      },
      (error) => {
        this.snackBar.open('Failed to load conflict records', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  openConfirmDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this conflict record?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteConflict(id);
      }
    });
  }

  deleteConflict(id: number): void {
    this.conflictService.deleteById(id).subscribe(
      () => {
        this.snackBar.open('Conflict record deleted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.getAllConflicts();  // Refresh the list after deletion
      },
      (error) => {
        this.snackBar.open('Failed to delete conflict record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onEdit(conflict: any): void {
    this.router.navigateByUrl(`/edit-conflict/${conflict.conflict_id}`);
  }
}

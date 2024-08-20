import { Component, OnInit } from '@angular/core';
import { BirthService } from '../../service/birth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-birth-home',
  templateUrl: './birth-home.component.html',
  styleUrls: ['./birth-home.component.css']
})
export class BirthHomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'father_name', 'mother_name', 'child_name', 'date_of_birth', 'merit_status', 'actions'];
  birthRecords: any = [];

  constructor(
    private birthService: BirthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllBirth();
  }

  getAllBirth() {
    this.birthService.getAll().subscribe(
      (response: any) => {
        this.birthRecords = response;
      },
      (error) => {
        this.snackBar.open('Failed to load birth records', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  openConfirmDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBirth(id);
      }
    });
  }

  deleteBirth(id: number): void {
    this.birthService.deleteById(id).subscribe(
      () => {
        this.snackBar.open('Birth record deleted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.getAllBirth(); // Refresh the list after deletion
      },
      (error) => {
        this.snackBar.open('Failed to delete birth record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onEdit(birthRecord: any): void {
    this.router.navigateByUrl(`/edit-birth/${birthRecord.birth_id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisasterService } from '../../service/disaster.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-desasters-home',
  templateUrl: './desasters-home.component.html',
  styleUrls: ['./desasters-home.component.css']  // Fix typo: styleUrl -> styleUrls
})
export class DesastersHomeComponent implements OnInit {
  disasters: any[] = [];

  constructor(
    private disasterService: DisasterService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllDisaster();
  }

  getAllDisaster() {
    this.disasterService.getAll().subscribe(
      (data: any[]) => {
        this.disasters = data;
      },
      (error) => {
        this.snackBar.open('Failed to load disaster records', 'Close', {
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
        this.deleteDisaster(id);
      }
    });
  }

  deleteDisaster(id: number): void {
    this.disasterService.deleteById(id).subscribe(
      () => {
        this.snackBar.open('Disaster record deleted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.getAllDisaster(); // Refresh the list after deletion
      },
      (error) => {
        this.snackBar.open('Failed to delete disaster record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onAddPerson(): void {
    this.router.navigateByUrl('/reg');
  }

  onEdit(disaster: any): void {
    this.router.navigateByUrl('edit-disaster/' + disaster.disaster_id);
  }
}

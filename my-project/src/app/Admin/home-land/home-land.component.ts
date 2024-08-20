import { Component, OnInit } from '@angular/core';
import { LandService } from '../../service/land.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home-land',
  templateUrl: './home-land.component.html',
  styleUrls: ['./home-land.component.css']
})
export class HomeLandComponent implements OnInit {
  displayedColumns: string[] = ['id', 'from_owner', 'to_owner', 'boundary_north', 'boundary_south', 'boundary_east', 'boundary_west', 'form_number', 'user_id', 'actions'];
  landRecords: any = [];

  constructor(
    private landService: LandService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllLand();
  }

  getAllLand() {
    this.landService.getAllLand().subscribe(
      (response: any) => {
        this.landRecords = response;
      },
      (error) => {
        this.snackBar.open('Failed to load land records', 'Close', {
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
      width: '250px',
      data: { message: 'Are you sure you want to delete this land record?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.deleteLandd(id);
      }
    });
  }

  deleteLandd(id: number): void {
    this.landService.deleteLand(id).subscribe(
      () => {
        this.snackBar.open('Land record deleted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.getAllLand(); // Refresh the list after deletion
      },
      (error) => {
        this.snackBar.open('Failed to delete land record. Please try again.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onEditLand(landRecord: any) {
    this.router.navigateByUrl('/edit_land/' + landRecord.land_id);
  }
}

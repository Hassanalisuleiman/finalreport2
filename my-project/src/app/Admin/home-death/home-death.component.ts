import { Component, OnInit } from '@angular/core';
import { DeathService } from '../../service/death.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home-death',
  templateUrl: './home-death.component.html',
  styleUrls: ['./home-death.component.css']
})
export class HomeDeathComponent implements OnInit {
  displayedColumns: string[] = ['id', 'corpse_name', 'date_of_death', 'user_id', 'causes_of_death', 'actions'];
  deathRecords: any = [];

  constructor(
    private deathService: DeathService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllDeath();
  }

  getAllDeath() {
    this.deathService.getAll().subscribe(
      (response: any) => {
        this.deathRecords = response;
      },
      (error) => {
        this.snackBar.open('Failed to load death records', 'Close', {
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
        this.deleteDeath(id);
      }
    });
  }

  deleteDeath(id: number): void {
    this.deathService.deleteById(id).subscribe(
      () => {
        this.snackBar.open('Death record deleted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.getAllDeath(); // Refresh the list after deletion
      },
      (error) => {
        this.snackBar.open('Failed to delete death record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onEdit(deathRecord: any): void {
    this.router.navigateByUrl(`/edit-death/${deathRecord.death_id}`);
  }
}

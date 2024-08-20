import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeathService } from '../../../service/death.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-death',
  templateUrl: './edit-death.component.html',
  styleUrls: ['./edit-death.component.css']
})
export class EditDeathComponent implements OnInit {
  deathRecord: any = {};

  constructor(
    private deathService: DeathService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.deathService.getById(id).subscribe((response: any) => {
      this.deathRecord = response;
    });
  }

  updateDeath(): void {
    this.deathService.putById(this.deathRecord.death_id, this.deathRecord).subscribe(
      () => {
        this.snackBar.open('Death record updated successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/homedeath']);
      },
      (error) => {
        this.snackBar.open('Failed to update death record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}

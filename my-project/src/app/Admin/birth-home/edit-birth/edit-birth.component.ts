import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BirthService } from '../../../service/birth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-birth',
  templateUrl: './edit-birth.component.html',
  styleUrls: ['./edit-birth.component.css']
})
export class EditBirthComponent implements OnInit {
  birthRecord: any = {};

  constructor(
    private birthService: BirthService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.birthService.getById(id).subscribe(
      (response: any) => {
        this.birthRecord = response;
      },
      (error) => {
        this.snackBar.open('Failed to load birth record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  updateBirth(): void {
    this.birthService.putById(this.birthRecord.birth_id, this.birthRecord).subscribe(
      () => {
        this.snackBar.open('Birth record updated successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/birthhome']);
      },
      (error) => {
        this.snackBar.open('Failed to update birth record', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}

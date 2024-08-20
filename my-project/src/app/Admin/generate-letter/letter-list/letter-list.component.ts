import { Component, OnInit } from '@angular/core';
import { PrintedLetter, PrintedLetterService } from '../../../service/printed-letter.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'recipient', 'date', 'actions'];
  printedLetters: PrintedLetter[] = [];

  constructor(
    private printedLetterService: PrintedLetterService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPrintedLetters();
  }

  loadPrintedLetters(): void {
    this.printedLetterService.getAll().subscribe(
      (letters) => {
        this.printedLetters = letters;
      },
      (error) => {
        this.snackBar.open('Failed to load letters', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  openConfirmDialog(id?: number): void {
    if (id === undefined) {
      this.snackBar.open('Invalid letter ID', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['error-snackbar']
      });
      return;
    }
    console.log('Opening confirmation dialog for ID:', id);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { message: 'Are you sure you want to delete this letter?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if (result === 'confirm') {
        this.deleteLetter(id);
      }
    });
  }

  deleteLetter(id: number): void {
    this.printedLetterService.deleteById(id).subscribe(
      () => {
        this.loadPrintedLetters(); // Refresh the list after deletion
        this.snackBar.open('Letter deleted successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error deleting letter:', error);
        this.snackBar.open('Failed to delete letter. Please try again.', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}

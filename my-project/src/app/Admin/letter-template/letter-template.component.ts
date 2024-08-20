import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-letter-template',
  templateUrl: './letter-template.component.html',
  styleUrls: ['./letter-template.component.css']
})
export class LetterTemplateComponent implements OnInit {
  letterTypes: any[] = [];
  recipients: any[] = [];
  selectedLetterType: string = '';
  selectedRecipientId: number | null = null;
  selectedRecipient: any = null;
  currentDate: string = new Date().toLocaleDateString('en-GB');
  citizen: any = {};  // You should populate this with citizen data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadLetterTypes();
    this.loadRecipients();
  }

  loadLetterTypes(): void {
    // Load letter types from backend
    this.http.get('http://localhost:3000/letter-types').subscribe(data => {
      this.letterTypes = data as any[];
    });
  }

  loadRecipients(): void {
    // Load recipients from backend
    this.http.get('http://localhost:3000/recipients').subscribe(data => {
      this.recipients = data as any[];
    });
  }

  onLetterTypeChange(): void {
    // Handle letter type change if needed
  }

  onRecipientChange(): void {
    if (this.selectedRecipientId !== null) {
      this.selectedRecipient = this.recipients.find(recipient => recipient.id === this.selectedRecipientId);
    }
  }

  printLetter(): void {
    window.print();
    this.saveLetterDetails();
  }

  saveLetterDetails(): void {
    // Save important details to the database
    const letterDetails = {
      citizen_id: this.citizen.id,
      recipient_id: this.selectedRecipient.id,
      date: this.currentDate,
      letter_type: this.selectedLetterType
    };

    this.http.post('http://localhost:3000/save-letter-details', letterDetails).subscribe(response => {
      console.log('Letter details saved', response);
    });
  }
}

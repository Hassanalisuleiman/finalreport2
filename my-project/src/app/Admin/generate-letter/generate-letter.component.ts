import { Component, OnInit } from '@angular/core';
import { PrintedLetter, PrintedLetterService } from '../../service/printed-letter.service';

@Component({
  selector: 'app-generate-letter',
  templateUrl: './generate-letter.component.html',
  styleUrls: ['./generate-letter.component.css']
})
export class GenerateLetterComponent implements OnInit {
  selectedLetterType: any;
  selectedAddressee: any;
  organizationName: string | undefined;
  poBox: string | undefined;
  additionalName: string | undefined;
  isSubmitted: boolean = false;
  addressees: any[] = [];
  shehias: any[] = [];
  firstName: string = '';
  lastName: string = '';
  houseNo: string = '';
  phoneNo: string = '';
  shehiaValue: string = '';
  letterTemplates: any;
  country: string = 'Tanzania'; // Default country value
  date: string = new Date().toISOString().split('T')[0]; // Default to today's date

  constructor(
    private printedservice: PrintedLetterService
  ) {
    this.letterTemplates = this.printedservice.getLetterTemplates();
    this.country = this.printedservice.getDefaultCountry();
    this.date = this.printedservice.getDefaultDate();
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.firstName = user?.first_name || 'User';
    this.lastName = user?.last_name || '';
  }

  onSubmit() {
    if (this.selectedLetterType && this.organizationName && this.poBox) {
      this.isSubmitted = true;
      this.savePrintedLetter(); // Save the data to the database when the form is submitted
    }
  }
  savePrintedLetter() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const printedLetter: PrintedLetter = {
      letterType: this.selectedLetterType.name,
      organizationName: this.organizationName!,
      poBox: this.poBox!,
      country: this.country,
      user_id: user?.user_id || 1, // Default user_id to 1 if not found
      date: this.date,
      additionalName: this.additionalName,
      User: undefined
    };

    this.printedservice.post(printedLetter).subscribe(
      response => console.log('Printed letter saved successfully', response),
      error => console.error('Error saving printed letter', error)
    );
  }


  onPrint() {
    if (this.isSubmitted) {
      const printContents = document.getElementById(this.selectedLetterType.template!)!.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;

      if (this.selectedLetterType.name === 'Umiliki wa nyumba/kiwanja' && this.additionalName) {
        document.body.innerHTML = document.body.innerHTML.replace('..................................................................', this.additionalName);
      }

      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  }

  
}

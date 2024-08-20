// src/app/components/addressee/addressee.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddresseeService } from '../../service/addressee.service';


@Component({
  selector: 'app-add-addressee',
  templateUrl: './add-addressee.component.html',
  styleUrls: ['./add-addressee.component.css']
})
export class AddAddresseeComponent implements OnInit {
  addresseeForm: FormGroup;

  constructor(private fb: FormBuilder, private addresseeService: AddresseeService) {
    this.addresseeForm = this.fb.group({
      name: ['', Validators.required],
      organization: ['', Validators.required],
      country: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.addresseeForm.valid) {
      this.addresseeService.createAddressee(this.addresseeForm.value).subscribe(response => {
        console.log('Addressee created:', response);
        this.addresseeForm.reset();
      });
    }
  }
}


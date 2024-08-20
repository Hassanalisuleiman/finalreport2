import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShehaService } from '../../service/sheha.service'; // Import ShehaService

@Component({
  selector: 'app-register-sheha',
  templateUrl: './register-sheha.component.html',
  styleUrls: ['./register-sheha.component.css']
})
export class RegisterShehaComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'shehia_name', 'actions'];
  shehas: any[] = [];

  constructor(
    private shehaservice: ShehaService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllShehas(); // Fetch the shehas when the component initializes
  }

  getAllShehas(): void {
    this.shehaservice.getShehas().subscribe(
      (response: any) => {
        console.log('my sheha',response);
        // this.shehas = response;
      },
      (error) => {
        console.error('Error fetching shehas', error);
      }
    );
  }

  // You can implement delete and edit methods here if needed
}

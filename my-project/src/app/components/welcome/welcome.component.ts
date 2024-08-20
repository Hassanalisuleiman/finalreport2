import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'shehia_name'];
  shehas: any[] = [];
  firstName: string | null = '';
  shehiaName: string | null = '';
  sheha: any;
  isWelcomeVisible: boolean = true; // Controls visibility
  

  constructor(private router: Router ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.firstName = user?.first_name || 'User';
    this.shehiaName = user?.shehia_name || 'User';
    
    
  }

  okClicked(): void {
    this.isWelcomeVisible = false; // Hide the welcome message
  }
}

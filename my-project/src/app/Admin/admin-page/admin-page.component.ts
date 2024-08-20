import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }

  // Methods to handle report viewing
  viewUserActivityReport() {
    console.log('User Activity Report Clicked');
    // Add logic to navigate or display report
  }

  viewSystemPerformanceReport() {
    console.log('System Performance Report Clicked');
    // Add logic to navigate or display report
  }

  viewSecurityAuditReport() {
    console.log('Security Audit Report Clicked');
    // Add logic to navigate or display report
  }

}

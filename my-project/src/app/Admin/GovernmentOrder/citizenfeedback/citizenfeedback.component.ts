import { Component, OnInit } from '@angular/core';
import { UserorderService } from '../../../service/userorder.service';

@Component({
  selector: 'app-citizenfeedback',
  templateUrl: './citizenfeedback.component.html',
  styleUrl: './citizenfeedback.component.css'
})
export class CitizenfeedbackComponent implements OnInit{

  citizenOrders: any[] = [];

  constructor(private useroderservice: UserorderService) { }

  ngOnInit(): void {
    this.loadCitizenOrders();
  }

  loadCitizenOrders(): void {
    this.useroderservice.getAllCitizenOrders().subscribe(data => {
      this.citizenOrders = data;
    });
  }

  updateCitizenOrder(id: number, received: boolean): void {
    const dateReceived = received ? new Date() : null;
    this.useroderservice.updateCitizenOrder(id, { received, date_received: dateReceived }).subscribe(() => {
      this.loadCitizenOrders();
    });
  }

  getCitizensWithoutOrder(orderId: number): void {
    this.useroderservice.getCitizensWithoutOrder(orderId).subscribe(data => {
      console.log('hawajapata',data);
      // Handle the list of citizens who haven't received the order
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { GovernmentOrderService } from '../../../service/government-order.service';
import { UserorderService } from '../../../service/userorder.service';

@Component({
  selector: 'app-record-orders',
  templateUrl: './record-orders.component.html',
  styleUrls: ['./record-orders.component.css'] // Corrected property name
})
export class RecordOrdersComponent implements OnInit {
  orders: any[] = [];
  newOrder = {
    shehia_id: '',
    user_id: '',
    order_type: '',
    order_description: ''
  };

  constructor(
    private governmentOrderService: GovernmentOrderService,
    private userOrderService: UserorderService
  ) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.userOrderService.getAllCitizenOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  createOrder(): void {
    this.governmentOrderService.createGovernmentOrder(this.newOrder).subscribe(() => {
      this.loadOrders();
      this.newOrder = { shehia_id: '', user_id: '', order_type: '', order_description: '' }; // Reset the form
    });
  }
}

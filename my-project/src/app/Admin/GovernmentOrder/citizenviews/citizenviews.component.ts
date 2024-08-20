import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserorderService } from '../../../service/userorder.service';
import { RecordgovernmentorderService } from '../../../service/recordgovernmentorder.service';
import { GovernmentOrderService } from '../../../service/government-order.service';

@Component({
  selector: 'app-citizenviews',
  templateUrl: './citizenviews.component.html',
  styleUrl: './citizenviews.component.css'
})
export class CitizenviewsComponent implements OnInit {
  citizenOrders: any[] = [];
  gvtOrders: any[] = [];
  orders: any[] = [];

  constructor(
    private userOrderService: UserorderService,
    private governmentOrderService: GovernmentOrderService
  ) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.userOrderService.getAllCitizenOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  updateOrderStatus(orderId: number, received: boolean): void {
    this.userOrderService.updateCitizenOrderStatus(orderId, received).subscribe(() => {
      this.loadOrders(); // Refresh the order list
    });
  }

}

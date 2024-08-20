// src/app/components/citizen-list/citizen-list.component.ts

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CitizenService } from '../../service/citizen.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'house_no', 'phone_no', 'actions'];
  users: any;



  totalUsers: number = 0;
  activeUsers: number = 0;
  pendingRequests: number = 0;
  activeSessions: number =0;
  newRegistrations: number=0;
  dataSource: any;


  

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCitizens();
    // this.loadStatistics();
  }
  getAllCitizens(){
    this.userService.getAll().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  editCitizen(user: any): void {
    this.router.navigateByUrl('/edit-home/'+user.user_id);
  }

  deleteCitizen(id: number): void {
    this.userService.deleteById(id).subscribe(() => {
      this.getAllCitizens();   //refresh the page
      
    });
  }
  onAddPerson(){
    this.router.navigateByUrl('/addcitizen');
  }

  // applyFilter(event:Event){
  //   const filterValue =(event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if(this.dataSource.paginator){
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}
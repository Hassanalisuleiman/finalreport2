import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrl: './edit-home.component.css'
})
export class EditHomeComponent implements OnInit {

  constructor(private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe((paramValues)=>{
      console.log("passed param",paramValues);
    })
  }

}

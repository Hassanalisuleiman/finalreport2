import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-citizen',
  templateUrl: './add-citizen.component.html',
  styleUrl: './add-citizen.component.css'
})
export class AddCitizenComponent implements OnInit{
  submitForm!: FormGroup;
  post: any;
  

  constructor( private userservice: UserService,private fb: FormBuilder, private router: Router    ){
    this.submitForm = this.fb.group({
      fname: ['',],
      lname: ['',],
      street: [''],
      house_no: [''],
      gender: [''],
      phone_no: [''],
      zan_id: [''],
      tz_id: [''],
      date_of_birth: [''],
      photo: [null]
    });
  }


  ngOnInit(): void {

  }

  onSave():void{
    if(this.submitForm.valid){
      const submitcitizen = this.submitForm.value;
      console.log(submitcitizen);
      this.userservice.post(submitcitizen).subscribe(
        Response =>{
          alert(Response);
          this.router.navigateByUrl('');
          
        }, Error =>{
          alert(Error.error)
        }
      )
    }
  }
  onFileChange(event: any): void{

  }

}

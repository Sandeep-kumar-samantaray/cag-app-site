import { Component, OnInit } from '@angular/core';
import { NewUser } from '../Bean/NewUser';
import { RestCallService } from '../rest-call.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
}) 
export class NewUserComponent implements OnInit {
  newuser = new NewUser();
  isLoading = false;
  constructor(public service:RestCallService) { }

  ngOnInit() {
  }

  addnewUser():any{
    //
    this.isLoading = true;
    this.service.addNewUser(this.newuser).subscribe(data =>{
      console.log(data);
      this.isLoading = false;
    } ,
    error => {
      console.log(error);
      this.isLoading = false;
    })
    console.log(this.newuser);
  }

}

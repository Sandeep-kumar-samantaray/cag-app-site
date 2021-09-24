import { Component, OnInit } from '@angular/core';

import { RestCallService } from '../rest-call.service';
import { UserBean } from '../UserBean';
import { Router } from '@angular/router';
import { JwtRequest } from '../Bean/JwtRequest';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 bean = new UserBean();
 jwtRequest = new JwtRequest();
 authResponse  = null;
 isLoading  = false;
  roleTag = [
  {id: 1, text: 'USER'},
  {id: 2, text: 'ADMIN'},
];
  constructor(public service : RestCallService , private _route :Router) { }

  ngOnInit() {
  }

  resetClick(){
    this.bean.username = null;
    this.bean.password = null;
    // console.log("reset clicked");
  }

  submitClick(){
    // localStorage.clear()
    if(this.bean.username == "sandeep" && this.bean.password == "1234"){
      alert("you submit successfully");
      this._route.navigate(['dashbord']);
    }else{
      this.jwtRequest.username = this.bean.username;
      this.jwtRequest.password = this.bean.password;
      this.isLoading = true;
      console.log(this.service.base_URL);
      const data = this.service.doLogin(this.jwtRequest).subscribe(
        data => {
          if(data){
            this.isLoading = false
            localStorage.setItem('Username' , data.authResponse.username);
            localStorage.setItem('token' , data.authResponse.token);
           // localStorage.setItem('currentuser' , data.authResponse) 
            this._route.navigate(['dashbord']);
          }
          else{
            this.isLoading = false
            this._route.navigate(['login']);
          }
        },
        error => {
          this.isLoading = false
          alert("Unable to reach !! Do Login again ");
          // +error.error.errorMsg)
        }
      );
    }
    
     }

}
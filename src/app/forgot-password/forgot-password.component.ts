import { Component, OnInit } from '@angular/core';
import { RestCallService } from '../rest-call.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  mailId:any;
  phoneNo:any;
  isLoading=false;
  constructor(private _service:RestCallService) { }

  ngOnInit() {
  }

  submitClick():void{
    this.isLoading =true;
    const dataObj= this._service.changePassword(this.mailId).subscribe(data =>{
      console.log(data);
      this.isLoading = false;
    });

     console.log(dataObj);
     this.isLoading = false;
  }
  submitClicked():void{
    this.isLoading =true;
    const dataObj= this._service.sendOTP(this.mailId).subscribe(data =>{
      console.log(data);
      this.isLoading = false;
    });

     console.log(dataObj);
     this.isLoading = false;
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestCallService } from '../rest-call.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  userbeanAll = [];
  divOne: boolean = false;
  divTwo: boolean = false;

  //  columnDefs = [
  //    { headerName : 'ID' , field:'id'},
  //    { headerName : 'User Name' , field:'username'},
  //    { headerName : 'Password', field:'password'},
  //    { headerName : 'Role' , field:'role'}
  //  ];

  rowData: any;

  constructor(private _route: Router, private service: RestCallService) { }

  ngOnInit() {
  }

  logoutClick(): any {
    localStorage.clear();
    this._route.navigate(['']);
  }

  getDetails(): any {
    if (localStorage.getItem('token') == null) {
      this._route.navigate(['login']);
    }
    else {
      this.divOne = true;
      this.divTwo = false;
      this.rowData = [];
      const data = this.service.getUser().subscribe(respone => {
        console.log(respone),
        this.rowData = respone
      },
      error => { 
        if(error instanceof HttpErrorResponse){
          alert(error.error.errorMsg);
        }
      }
      );
        
    }
  }
  //cardinal
  getCardinal():any{
    this._route.navigate(['cardinal'])
  }

  changePWclick():any{
    this._route.navigate(['passwordchange'])
  }

  getEmployee(): any {
    if (localStorage.getItem('token') == null) {
      this._route.navigate(['login']);
    }
    else {
      this.divTwo = true;
      this.divOne = false;
      this.rowData = [];
      const data = this.service.getEmployee().subscribe(response => {
        this.rowData = response;
      },
      error => {
        if(error instanceof HttpErrorResponse){
          alert(error.error.errMsg);
        }
      }
      );
    }
  }
}

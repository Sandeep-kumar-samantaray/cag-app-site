import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestCallService {
  // base_URL: string = "http://localhost:8081"; 
  base_URL = environment.hostURL + environment.port + environment.addapi;
  currentToken: string = "";
  params = new HttpParams();

  header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*')
    .set('Authorization', this.checkToken());

  //let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )

  //  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  constructor(public http: HttpClient , public _route: Router) { }

  doLogin(bean: any): Observable<any> {
    return this.http.post(this.base_URL + "/login", bean
      , { 'headers': this.header }
    );
  }

  getUser(): Observable<any> {
    return this.http.get(this.base_URL + "/user-details",
      { 'headers': this.header });
  }

  getEmployee(): Observable<any> {
    return this.http.get(this.base_URL + "/emp-details",
      { 'headers': this.header });
  }

  addNewUser(data: any): Observable<any> {
    return this.http.post(this.base_URL + "/new-user", data, 
      { 'headers': this.header })
  }
  changePassword(mailTo:any):Observable<any>{
    // this.params.set('mailTo',data);
    return this.http.get(this.base_URL+"/sendmail/"+`${mailTo}`, { 'headers':this.header});
  }
  sendOTP(phoneNumber:any): Observable<any>{
    return this.http.get(this.base_URL+"/getOtp/"+`${phoneNumber}`,{headers:this.header});
  }

  checkToken(): string {
    if (localStorage.getItem('token') == null) {
     // alert('Time out , Do log in again !!');
      //this._route.navigate(['login']);
      return 'authorization';
    }
    else {
      return `Bearer ${localStorage.getItem('token')}`;
    }
  }
}

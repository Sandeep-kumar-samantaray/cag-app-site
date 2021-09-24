import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardinal',
  templateUrl: './cardinal.component.html',
  styleUrls: ['./cardinal.component.css']
})
export class CardinalComponent implements OnInit {

  constructor(private _route : Router) { }

  ngOnInit() {
  }
 
  goBack(){
    this._route.navigate(['dashbord']);
  }

}

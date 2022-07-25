import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() {
    console.log("Hello");
   }

  ngOnInit(): void {
   
  }
  exec(){
    console.log('Munny');
  }
  

}

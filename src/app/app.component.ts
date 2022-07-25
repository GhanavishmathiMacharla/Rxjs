import { Component,OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
//import {SecondComponent} from './second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rxjs';
   
  ngOnInit(){
   HomeComponent;
   
  }

}

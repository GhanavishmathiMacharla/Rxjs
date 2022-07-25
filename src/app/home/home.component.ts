import { Call } from '@angular/compiler';
import { Component,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import {Subscription,Observable} from 'rxjs';
import {filter,map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

 obs!: Subscription;
  constructor(private route:ActivatedRoute,) { }

  ngOnInit(): void {
   
    
    

    //Creating our own  Observable
    let customObservable = Observable.create((observer: { next: (arg0: Number) => void; complete: () => void; })=>{
      let count=0;
      setInterval(()=>{
        if(count>10){
          observer.complete();
        }
      observer.next(count);
      count++;
    },500)
    
    

  })
   
  this.obs=customObservable.pipe(map(val=>{
    return 'count is '+ val;
  })).subscribe((val: any)=> console.log(val),
      (error: any) =>{
      console.log(error);
    },
    ()=>{
      console.log('complete');
    }
    
  )}
  ngOnDestroy(){
    this.obs.unsubscribe();
  }
  
}

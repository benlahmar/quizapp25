import { Component, Input, OnInit } from '@angular/core';
import { q } from '../../share/dataquiz';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../core/services/myservice.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-quiz1',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component implements OnInit{

  @Input()
  username:string;
usname:string | null 
  data:any;
  page:number=0;

  txt:string;
 mode:string="quiz";

  message:string="hello";
  private subscription: any;
  constructor(private route: ActivatedRoute, public service:MyserviceService) {}
  ngOnInit(): void {

    this.subscription = this.service.message$.subscribe(
      (message: string) => {  
        this.message = message;
        console.log("component a recu message from service",this.message);
      });
  

    this.usname=this.route.snapshot.paramMap.get('username');

   this.txt= this.service.sayhollo();
   this.data=this.service.data;
  }
  
changemessage()
  {
    this.service.updateMessage("hello from quiz1");
  }
  ngondestroy() {
    this.subscription.unsubscribe();  
  }
  goto(x:number)
  {
    this.page=x;
  }
  changemode(m:string)
  {
    this.mode=m;
  }
}

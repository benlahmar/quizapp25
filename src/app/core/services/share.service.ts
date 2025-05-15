import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  subjetmessage:BehaviorSubject<string> = new BehaviorSubject<string>("bonjour ....");
  
  message$=this.subjetmessage.asObservable();

  constructor() {  
   }

  getcurentmessage(){
    return this.subjetmessage.getValue();
  }
  updatemessage(msg:string){
    this.subjetmessage.next(msg);
    console.log("message updated");
  }
}

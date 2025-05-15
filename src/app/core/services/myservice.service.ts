import { Injectable } from '@angular/core';
import { q } from '../../share/dataquiz';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private message:BehaviorSubject<string> = new BehaviorSubject<string>("Bonjour le monde");
  public message$ = this.message.asObservable();
  data=q;
 
  constructor() { }

  updateMessage(newMessage: string) {
    this.message.next(newMessage);
    console.log("message updated to: ", newMessage);
  }

  getcurrentMessage() {
    return this.message.getValue();
  }
  
   sayhollo()
  {
    return 'hello';
  }
  updatedata()
  {
    return '';
  }
}

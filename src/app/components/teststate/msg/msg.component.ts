import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../../core/services/share.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-msg',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './msg.component.html',
  styleUrl: './msg.component.css'
})
export class MsgComponent implements OnInit {

 
  constructor(public service:ShareService) {}
  ngOnInit(): void {
    console.log("init compoent msg");
  }

  changemessage() {
    this.service.updatemessage("message updated from msg component");
    console.log("message from msg component");
  }
}

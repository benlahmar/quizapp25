import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Output()
  notif:EventEmitter<any>=new EventEmitter<any>();

  @Input()
  total:number;
  p:number=0;
  goto(x:number)
  {
    this.p=x;
    this.notif.emit(this.p);
  }
}

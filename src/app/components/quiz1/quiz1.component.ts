import { Component } from '@angular/core';
import { q } from '../../share/dataquiz';

@Component({
  selector: 'app-quiz1',
  standalone: true,
  imports: [],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component {

  data=q;
  page:number=0;

 mode:string="quiz";

  goto(x:number)
  {
    this.page=x;
  }
  changemode(m:string)
  {
    this.mode=m;
  }
}

import { Component, OnInit } from '@angular/core';
import { q } from '../../share/dataquiz';
import { QuestionComponent } from "../question/question.component";
import { Quiz } from '../../core/quiz';
import { PaginationComponent } from "../../share/pagination/pagination.component";
import { ConfigComponent } from "../config/config.component";
import { DatePipe, JsonPipe } from '@angular/common';
import { QuizPipe } from '../../share/quiz.pipe';
import { ScorePipe } from '../../share/score.pipe';
import { BackcolorDirective } from '../../share/backcolor.directive';
import { ActivatedRoute } from '@angular/router';
import { csharp } from '../../share/csharp';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent, PaginationComponent, ConfigComponent,DatePipe,QuizPipe,ScorePipe,BackcolorDirective],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
data:Quiz;
  page:number=0;
  mode:string="quiz";
  date:Date;
  datastart:Date;
  diffmin:any;
 theme:string
 aa:string
  constructor(private route:ActivatedRoute)
  {
      
  }

  
 ngOnInit(): void {
     this.route.params.subscribe(d=>{
        this.theme=d['abc'];
        if(this.theme=="aspnet")
          this.data=new Quiz(q);
        else
          this.data=new Quiz(csharp);

     })

     
     this.route.queryParams.subscribe(p=>{
     this.aa= p["aa"];
     })


     this.datastart=new Date();

    setInterval(() => {
       this.date=new Date();

        let d1=this.datastart.getTime();
    let d2=this.date.getTime();
     let diff=d2-d1;
    this.diffmin=Math.floor(diff/(1000));
   


    }, 1000);


    setInterval(() => {
     if(this.data.config.duration<this.diffmin)
    {
      this.mode="submit";
    }
   }, 3000);
  
  }

recuperer(x:any)
{
  
  this.page=x;
   console.log(x+"------"+this.page);
}

changemode(m:string)
{
  this.mode=m;
  console.log(m);
}
}

import { Component } from '@angular/core';
import { q } from '../../share/dataquiz';
import { QuestionComponent } from "../question/question.component";
import { Quiz } from '../../core/quiz';
import { PaginationComponent } from "../../share/pagination/pagination.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent, PaginationComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  data:Quiz=new Quiz(q);
  page:number=0;
  
recuperer(x:any)
{
  
  this.page=x;
   console.log(x+"------"+this.page);
}
}

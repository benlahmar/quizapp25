import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from '../core/quiz';
import { Question } from '../core/question';

@Pipe({
  name: 'quiz',
  standalone: true
})
export class QuizPipe implements PipeTransform {

  transform(q: Quiz, ...args: string[]): Question[] {
    let x:Question[]=[];
    if(args[0]=='select')
    x=q.questions.filter(c=>c.isresponse);
    if(args[0]=='correct')
      x=q.questions.filter(c=>c.iscorrect);
    return x;
  }

}

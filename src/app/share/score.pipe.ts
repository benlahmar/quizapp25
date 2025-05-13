import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from '../core/quiz';

@Pipe({
  name: 'score',
  standalone: true
})
export class ScorePipe implements PipeTransform {

  transform(value: Quiz, ...args: unknown[]): number {
    let qs=value.questions.filter(q=>q.iscorrect).length;
    let score= (qs/value.questions.length)*100
    return score;
  }

}

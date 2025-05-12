import { Component, Input } from '@angular/core';
import { OptionComponent } from "../option/option.component";
import { Question } from '../../core/question';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  qst:Question;

}

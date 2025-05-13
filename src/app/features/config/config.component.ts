import { Component, Input } from '@angular/core';
import { QuizConfig } from '../../core/quiz-config';
import { FormsModule } from '@angular/forms';
import { TableDirective } from '../../share/table.directive';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule,TableDirective],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

  @Input()
  data:QuizConfig;
}

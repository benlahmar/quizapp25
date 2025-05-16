import { Component, Input } from '@angular/core';
import { QuizConfig } from '../../core/quiz-config';
import { FormsModule } from '@angular/forms';
import { TableDirective } from '../../share/table.directive';
import { ConfigstoreComponent } from "../configstore/configstore.component";

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule, TableDirective, ConfigstoreComponent],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

  @Input()
  data:QuizConfig;
}

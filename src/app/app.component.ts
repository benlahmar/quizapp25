import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { q } from './share/dataquiz';
import { Quiz1Component } from "./components/quiz1/quiz1.component";
import { QuizComponent } from "./features/quiz/quiz.component";
import { ThemeListComponent } from "./features/theme-list/theme-list.component";
import { TopMenuComponent } from "./share/top-menu/top-menu.component";
import { MsgComponent } from "./components/teststate/msg/msg.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Quiz1Component, QuizComponent, ThemeListComponent, TopMenuComponent, MsgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title="atos25";
}

import { Routes } from '@angular/router';
import { ThemeListComponent } from './features/theme-list/theme-list.component';
import { QuizComponent } from './features/quiz/quiz.component';

export const routes: Routes = [
    {path: 'quiz/:abc', component: QuizComponent},
    {path:'theme',component:ThemeListComponent},
    {path: '', redirectTo: 'theme', pathMatch: 'full'},
];

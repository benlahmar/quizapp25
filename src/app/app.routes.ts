import { Routes, UrlSegment } from '@angular/router';
import { ThemeListComponent } from './features/theme-list/theme-list.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { Quiz1Component } from './components/quiz1/quiz1.component';
import { TopMenuComponent } from './share/top-menu/top-menu.component';
import { AuthGuard } from './core/guards/authguard.guard';

export const routes: Routes = [
  {
    path:'configstore',
    loadComponent:()=>import('./features/configstore/configstore.component').then(c=>c.ConfigstoreComponent),
    canActivate: [AuthGuard],
  },
    {path: 'quiz/:abc', component: QuizComponent},
    {
      path: 'users', 
      loadComponent: () => import('./features/user/user.component').then(c => c.UserComponent)},

   
      {   
        path: 'users/:id', loadComponent: () => import('./features/user-detail/user-detail.component').then(c => c.UserDetailComponent)
      }, 
      {
        path:'userform', loadComponent: () => import('./features/userform/userform.component').then(c => c.UserformComponent)
      },
       {
        path:'login', loadComponent: () => import('./core/components/login/login.component').then(c => c.LoginComponent)
      }

    
 ,

    {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path:'theme',loadComponent:()=>import('./features/theme-list/theme-list.component').then(c=>c.ThemeListComponent)},
    {path: 'home', loadComponent: () => import('./app.component').then(c => c.AppComponent),
    
      children:[
        {path:'',redirectTo:'theme',pathMatch:'full'},
        {path:'quiz/:abc',loadComponent:()=>import('./features/quiz/quiz.component').then(c=>c.QuizComponent)},
        {path:'setting',loadComponent:()=>import('./features/config/config.component').then(c=>c.ConfigComponent)},
      ]


     },
      {
      path:'quizform',loadComponent:()=>import('./features/quiz-form/quiz-form.component').then(c=>c.QuizFormComponent)
    },
 {
      path:'userformreactive',loadComponent:()=>import('./features/userformreactive/userformreactive.component').then(c=>c.UserformreactiveComponent)
    },
    
     {
      path:'quiz1',loadComponent:()=>import('./components/quiz1/quiz1.component').then(c=>c.Quiz1Component)
    },
     {
      path:'config',loadComponent:()=>import('./features/config/config.component').then(c=>c.ConfigComponent)
    },
    {
      path:'counter',loadComponent:()=>import('./components/counter/counter.component').then(c=>c.CounterComponent)
    },
    {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {consumed: url, posParams: {username: new UrlSegment(url[0].path.slice(1), {})}};
      }
      return null;
    },
    component: Quiz1Component,
  },
];

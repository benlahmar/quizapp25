import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './core/state/counter.reducer';
import { configreducer } from './core/state/config.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,  withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideStore({
      // Ici, on dit que la "slice" d'état nommée 'counter' sera gérée par counterReducer
      counter: counterReducer,
      config: configreducer
    })
],
};

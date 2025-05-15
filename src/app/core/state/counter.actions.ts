import { createAction, props } from '@ngrx/store';

// Action pour incrémenter le compteur
// Le type est généralement une chaîne descriptive '[Feature] Event Description'
export const increment = createAction('[Counter] Increment');

// Action pour décrémenter le compteur
export const decrement = createAction('[Counter] Decrement');

// Action pour réinitialiser le compteur à une valeur spécifique
// On utilise 'props' pour passer des données (payload) avec l'action
export const reset = createAction('[Counter] Reset', props<{ value: number }>());
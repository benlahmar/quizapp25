import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state'; // Si vous utilisez le state object

// Sélecteur de feature : pour obtenir la "slice" nommée 'counter' de l'état global
// <CounterState> est le type de la slice
// 'counter' doit correspondre à la clé utilisée dans provideStore
export const selectCounterState = createFeatureSelector<CounterState>('counter');

// Sélecteur pour obtenir la valeur du compteur à partir de la slice counter
export const selectCounterValue = createSelector(
  selectCounterState, // Prend la slice counter comme input
  (state: CounterState) => state.counter // Retourne la valeur de 'counter' dans cette slice
);

/*
// Si le state est juste le nombre 'number'
export const selectCounter = createFeatureSelector<number>('counter'); // Le sélecteur retourne directement le nombre
*/

// On va utiliser la version avec l'objet d'état { counter: number } pour l'exemple
export const selectCounter = selectCounterValue; // On exporte le sélecteur final sous un nom simple
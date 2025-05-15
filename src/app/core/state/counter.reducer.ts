import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { initialCounterState } from './counter.state'; // Si vous utilisez le state object
// Ou si le state est juste le nombre : const initialState = 0;

// Si le state est l'objet { counter: number }
export const counterReducer = createReducer(
  initialCounterState, // Ou l'état initial (ici { counter: 0 })

  // Quand l'action 'increment' est émise :
  on(increment, (state) => ({
    // On retourne un NOUVEL objet état (immutabilité)
    ...state, // Copie des autres propriétés de l'état (ici, il n'y en a pas)
    counter: state.counter + 1 // On met à jour la propriété counter
  })),

  // Quand l'action 'decrement' est émise :
  on(decrement, (state) => ({
    ...state,
    counter: state.counter - 1
  })),

  // Quand l'action 'reset' est émise :
  on(reset, (state, { value }) => ({ // On déstructure 'value' des 'props' de l'action
    ...state,
    counter: value // On met à jour la propriété counter avec la valeur passée
  }))
);

/*
// Si le state est juste le nombre 'number'
const initialState = 0; // L'état initial est le nombre 0

export const counterReducer = createReducer(
  initialState, // L'état initial est 0

  // Quand l'action 'increment' est émise :
  on(increment, (state) => state + 1), // On retourne le NOUVEAU nombre : state + 1

  // Quand l'action 'decrement' est émise :
  on(decrement, (state) => state - 1), // On retourne le NOUVEAU nombre : state - 1

  // Quand l'action 'reset' est émise :
  on(reset, (state, { value }) => value) // On retourne la NOUVELLE valeur passée par l'action
);
*/
// On va utiliser la version avec l'objet d'état { counter: number } pour l'exemple
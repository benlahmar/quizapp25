import { Component } from '@angular/core';

import { AsyncPipe, NgIf } from '@angular/common'; // Importer l'AsyncPipe et NgIf pour le template

import { Store } from '@ngrx/store'; // Importer le Store de NgRx
import { Observable } from 'rxjs'; // Importer Observable pour gérer les flux de données  
import { selectCounter } from '../../core/state/counter.selectors';
import { decrement, increment, reset } from '../../core/state/counter.actions';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, NgIf], // Importer AsyncPipe et NgIf pour le template
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 // Sélectionner la valeur du compteur depuis le store.
  // 'select' retourne un Observable qui émettra chaque fois que l'état de cette partie change.
  // Le type <{ counter: number }> correspond à la structure de l'état global gérée par provideStore.
  // Si votre reducer gérait directement le nombre, ce serait <number>.
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
     // Utiliser le sélecteur pour obtenir l'Observable de la valeur du compteur
    this.count$ = this.store.select(selectCounter);

    // Optionnel: Vous pouvez aussi sélectionner directement sans sélecteur si vous connaissez la structure,
    // mais les sélecteurs sont préférables pour l'abstraction et la composition.
    // this.count$ = this.store.select(state => state.counter.counter);
  }

  // Méthodes pour émettre des actions
  increment() {
    // On appelle dispatch() sur le store en lui passant l'action créée
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    // Pour l'action reset, on passe le payload (la valeur)
    this.store.dispatch(reset({ value: 0 }));
  }

  resetTo(newValue: number) {
     this.store.dispatch(reset({ value: newValue }));
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizConfig } from '../../core/quiz-config';
import { Observable } from 'rxjs';
import { allowreview } from '../../core/state/config.actions';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-configstore',
  standalone: true,
  imports: [FormsModule,AsyncPipe,JsonPipe],
  templateUrl: './configstore.component.html',
  styleUrl: './configstore.component.css'
})
export class ConfigstoreComponent {

  dataconfig:QuizConfig;
  conf$:Observable<QuizConfig>;

  constructor(private store:Store<{'config':QuizConfig}>) {
    this.conf$ = this.store.select('config');
  }

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.store.select('config').subscribe((data) => {
     console.log("config store data");
      console.log(data);
      this.dataconfig = data;
    });
  }

  alloreview() {
    this.store.dispatch(allowreview({ value: true }));
  }

  alloreview2(ee:any) {
   // 
   console.log(ee.target.checked);
   this.store.dispatch(allowreview({ value: ee.target.checked }));
  }



  updateConfig() {
    this.store.dispatch({ type: 'UPDATE_CONFIG', payload: { name: 'Updated Name' } });
  }
  resetConfig() {
    this.store.dispatch({ type: 'RESET_CONFIG' });
  }
  addConfig() {
    this.store.dispatch({ type: 'ADD_CONFIG', payload: { name: 'New Config' } });
  }
  deleteConfig() {
    this.store.dispatch({ type: 'DELETE_CONFIG', payload: { name: 'Config to Delete' } });
  }

}

import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { on } from '@ngrx/store';
import { Question } from '../../core/question';

@Component({
  selector: 'app-questionform',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './questionform.component.html',
  styleUrl: './questionform.component.css'
})
export class QuestionformComponent implements OnInit {

  qst:Question;
  qform:FormGroup;

  @Output()
  notif:EventEmitter<any> = new EventEmitter();
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.qform = this.fb.group({
      id: ['',Validators.required],
      name: ['',[Validators.required,Validators.minLength(5)]],
     
    });

  }
addquestion(){
  console.log(this.qform.value);
  
  this.qst = new Question(this.qform.value);
 
  this.notif.emit(this.qst);
  console.log(this.qst);
   this.qform.reset();
}

}

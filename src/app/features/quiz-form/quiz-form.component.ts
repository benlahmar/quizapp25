import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Quiz } from '../../core/quiz';
import { JsonPipe, NgIf } from '@angular/common';
import { QuestionformComponent } from "../questionform/questionform.component";
import { ShareService } from '../../core/services/share.service';
import { Subscription } from 'rxjs';
import { MsgComponent } from "../../components/teststate/msg/msg.component";

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf, QuestionformComponent, MsgComponent],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css'
})
export class QuizFormComponent implements OnInit {

  quizform: FormGroup;
  quiz: Quiz;
  etat: boolean = false;
  addq:boolean = false;
  msg:string="";
 // subscription:Subscription;

  constructor(private service:ShareService) {

  }

  ngOnInit(): void {

    this.service.message$.subscribe((msg:string) => {
      this.msg = msg; 
      console.log("message from quiz : "+this.msg);
    });
  

    this.quizform = new FormGroup({
      id: new FormControl('',[Validators.required,Validators.min(1)]),
      name: new FormControl('name'),
      description: new FormControl(),
     
    });
   this.quiz = new Quiz(this.quizform.value);
    console.log(this.quizform.value);
     console.log("in init quiz");
  }

  changemessage()
  {
    this.service.updatemessage("message updated from quiz form");
    console.log("message from quiz form");
  }
  
  send() {
    this.quiz = new Quiz(this.quizform.value);
    console.log(this.quiz);
    this.etat = true;
  }

  addquestion() {
    this.addq = true;
  }
 
  getquestion(qst: any) {
    this.quiz.questions.push(qst);
    console.log(this.quiz);
    this.addq = false;
  }
}

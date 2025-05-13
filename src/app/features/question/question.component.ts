import { Component, Input } from '@angular/core';
import { OptionComponent } from "../option/option.component";
import { Question } from '../../core/question';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  qst:Question;

  @Input()
  mode:string
  cls:string;

  isselected()
  {
     let nb=this.qst.options.filter((o)=>o.isSelected==true).length;
     if(nb==0 && this.mode=="review")
     {
       return'alert danger alert-danger'
     }
     else
     {
      if(nb!==0 && this.mode=="review")
        return 'alert alert-success'  
      else
        return 'alert alert-primary'
  }
}

iscorrect()
{
  return this.qst.options.every(o=>o.isSelected==o.isAnswer);
}

getnotif(x:any)
{
  let nb=this.qst.options.filter(o=>o.isSelected).length;
  if(nb>0)
    this.qst.isresponse=true;
  else
  this.qst.isresponse=false;

  let cc= this.qst.options.every(o=>o.isSelected==o.isAnswer);
  if(cc===true)
    this.qst.iscorrect=true;
  else
  this.qst.iscorrect=false;
  console.log(this.qst)
}
}

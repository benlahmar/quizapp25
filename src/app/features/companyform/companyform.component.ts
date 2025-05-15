import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-companyform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './companyform.component.html',
  styleUrl: './companyform.component.css'
})
export class CompanyformComponent {

  company: any;
  @Output()
notif:EventEmitter<any> = new EventEmitter();
etat:boolean = false;

verif(){
  if(this.company.name == "" || this.company.catchPhrase == "" || this.company.bs == ""){
    this.etat = false;
  }
  if(this.company.name != "" && this.company.catchPhrase != "" && this.company.bs != ""){
  
    this.etat = true;
  }
  this.notif.emit(this.etat);
}

  constructor() {
    this.company = {
      name: "",
      catchPhrase: "",
      bs: ""
      
    };
  }
}

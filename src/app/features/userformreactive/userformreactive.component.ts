import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../core/user';

@Component({
  selector: 'app-userformreactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './userformreactive.component.html',
  styleUrl: './userformreactive.component.css'
})
export class UserformreactiveComponent {

  user:User;
  id:FormControl=new FormControl('',Validators.required)
  name:FormControl=new FormControl();
  email:FormControl=new FormControl();

  constructor() { 
    this.user = new User();
    this.user.name = "";
    this.user.email = "";
  }

  ngoninit() {
    this.id.setValue("1");
  }
  addUser() {
    this.user.id = this.id.value;
    this.user.name = this.name.value;
    this.user.email = this.email.value;
    console.log(this.user);
  }
  
}

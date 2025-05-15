import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/user';
import { UserService } from '../../core/services/user.service';
import { CompanyformComponent } from "../companyform/companyform.component";

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [FormsModule, JsonPipe, CompanyformComponent],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {
  etat:boolean = false;
addUser() {
this.service.addUser(this.u).subscribe((data) => {
      console.log(data);    
})
}
alpha="abc";
u:User;
  constructor(private service:UserService) {
    this.u = new User();
    this.u.name = "";
    this.u.email = "";

    
}
recuper(x:any) {
  
  console.log(x);
  this.etat=x;
}
}
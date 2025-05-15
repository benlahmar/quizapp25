import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { PopupComponent } from "../../share/popup/popup.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PopupComponent,RouterLink,RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users:any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.getusers()
    .subscribe((data) => {
      console.log(data);
      this.users = data;
    });
    console.log("apres....")

  }
}

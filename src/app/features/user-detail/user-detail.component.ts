import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
id:number;
user:any;
  constructor(private userService: UserService,private route:ActivatedRoute) { }
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.userService.getuser(this.id)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
      });
    console.log("apres....")
  }
}

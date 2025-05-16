import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../cores/services/auth.service';
import { Mylib2Component } from 'mylib2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Mylib2Component,Mylib2Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    // Initialize any properties or services needed for the component
  }

  // Add any methods or properties needed for the login functionality
  login() {
    // Implement login logic here
    console.log('Login button clicked');
    this.authService.login();
    console.log(this.authService.isLogged);
  } 
}

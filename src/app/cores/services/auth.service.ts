import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged=false;

  constructor() { }
  login(){
    this.isLogged=true;
  }
  chcklogin(){
    return this.isLogged;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='https://jsonplaceholder.typicode.com/users';

   constructor(private http:HttpClient) { }

  public getusers()
  {
    return   this.http.get<User[]>(this.baseUrl,{observe:'body'});
  }

  public getuser(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public addUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }

  public updateUser(id: number, user: any) {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // usersData: any;
  // postsData: any;
  users:any = [
    'user1',
    'user2',
    'user3'
  ]

  private apiUrl = 'https://reqres.in/api/users';
  constructor(public httpClient:HttpClient) { }
  
  getData(){
    return "data from service file";
  }

  getUsers(){
    return this.users;
  }

  usersInfo(){
    return  this.httpClient.get('http://localhost:3000/users');
  }

  postInfo(){
    return this.httpClient.get('http://localhost:3000/posts');
  }

  demoApi(){
    return this.httpClient.get('https://reqres.in/api/users/2');
  }

  createUser(userData: any){
    return this.httpClient.post(this.apiUrl, userData);
  }

  getNewUser(){
    return this.httpClient.get('https://reqres.in/api/users');
  }
}

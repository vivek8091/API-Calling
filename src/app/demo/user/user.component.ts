import { CommonModule } from '@angular/common';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // onSubmit(form:any){
  //   console.log("Form Submitted",form.value);
  // }
  data: any;
  users: any;
  userData: any;
  postData: any;
  apiData: any;
  newUserData: any;
  newUser = {
    name: '',
    job: ''
  };
  constructor(public UserService:UserService){ }

  ngOnInit(){
    this.data = this.UserService.getData();
    console.log(this.data);

    this.users = this.UserService.getUsers();
    console.log(this.users);

    this.UserService.usersInfo().subscribe(data => {
      this.userData = data;
      console.log(this.userData);      
    });
    this.UserService.postInfo().subscribe(data => {
      this.postData = data;
      console.log(this.postData);      
    });
    this.UserService.demoApi().subscribe(data => {
      this.apiData = data;
      console.log("Data from free API");
      console.log(this.apiData);      
    });
    // this.fetchUsers();
    // this.UserService.getNewUser().subscribe(data => {
    //   this.newUserData = data;
    //   console.log("Data from free API");
    //   console.log(this.newUserData);      
    // });
  }

  addUser(){
    this.UserService.createUser(this.newUser).subscribe((response) => {
      console.log('user added',response);
      this.fetchUsers();
    }, (err) => {
      console.error('error while adding user',err);
    })
  }

  fetchUsers(){
    this.UserService.getNewUser().subscribe((data) => {
      console.log(data);
      
        this.newUserData = data;        
    }, (err) => {
      console.error('error while fetching', err);
    })
  }
}

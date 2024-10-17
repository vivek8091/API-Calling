import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  subscription!: Subscription;

  myObservable = new Observable((observer) => {
    console.log("observable starts");
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
      observer.complete();
    }, 5000);
  });

  ngOnInit(){
    this.subscription = this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log("observable completed");
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  // userForm:any;
  // isFormSubmitted:boolean=false;
  // constructor(public formbuilder:FormBuilder){

  // }
  // ngOnInit(){
  //   this.userForm = this.formbuilder.group({
  //     name: ['',Validators.required],
  //     email: ['', Validators.required]
  //   })
  // }
  // onSubmit(){
  //   console.log("Form submitted", this.userForm.value);
  //   setTimeout(() => {
  //     this.isFormSubmitted = true;
  //   },2000);
  // }
}
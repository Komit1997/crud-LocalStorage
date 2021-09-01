import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm !:FormGroup;
    newListUser:any;
    email: any;
  
   
   
    
    constructor( private toastr:ToastrService , private router:Router ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.email, Validators.required]),

    })
   this.newListUser = JSON.parse(sessionStorage.getItem('$key')!) || [];
  }  


  onSubmit(form:any){

   console.log(this.loginForm);

   sessionStorage.setItem('$key',JSON.stringify([this.loginForm.value]));
   sessionStorage.setItem('isLoggedIn',JSON.stringify('success'));

   this.router.navigate(['/home']);
 
   /* let user = JSON.parse(sessionStorage.getItem('$key')!) || [];
   if(user[0].email === this.loginForm.value.email){
    this.router.navigate(['/home']);
    this.toastr.success('login successfully','Success')
   }else{
    this.toastr.error('Unsuccessful', 'Error');
   } 
    */
//this.newListUser.push(this.loginForm.value);
 // sessionStorage.setItem('$key',JSON.stringify(this.newListUser));
    
   }

  

  }
  
  




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   formvalue !:FormGroup;
   listUsers:any =[];
   newListUser:any =[];
   editId:any;
   userId=0;
   email="komit.bagate@gmail.com";

 

  

  constructor(private formbuilder:FormBuilder, private toastr:ToastrService , private router:Router) { }

  ngOnInit() {
    this.checkLogin();
    this.formvalue= this.formbuilder.group({
      id:[''],
      firstname :[''],
      lastname:[''],
      email:[''] 
    }),
    this.newListUser = JSON.parse(localStorage.getItem('$key')!) || [];
  // get session storage , email ...if condition
   //this.newListUser =JSON.parse(sessionStorage.getItem('key')!) || [];
  }
   
  doAddUser(){
    
     if(this.formvalue){
       this.userId++;
       this.formvalue.get("id")?.patchValue(this.userId);
       this.newListUser.push(this.formvalue.value);
       localStorage.setItem('$key',JSON.stringify(this.newListUser));
       this.toastr.success('added successfully', 'success');
       this.formvalue.reset();
      
     }
     
  }

  

  doDelete(index: any){
     if(index){
       console.log(index);
       this.newListUser.splice(index ,1);
       localStorage.setItem('$key',JSON.stringify(this.newListUser));
       this.toastr.warning('deleted succesfully', 'delete')

     }
  }

  doedit(form:any){
     console.log(form); 
     this.editId = form;
    this.formvalue.setValue(form)

      
  }
  

  doUpdate(form:any){
      
      let users = JSON.parse(localStorage.getItem('$key')!) || [];
       users.forEach( (user:any)=> {
          if(user.id == form.id){
                user.firstname = form.firstname;
                user.lastname = form.lastname;
                user.email = form.email;
              
          } });

     localStorage.setItem("$key",JSON.stringify(users));
     this.newListUser = JSON.parse(localStorage.getItem('$key')!) || [];
     this.toastr.success('updated successfully', 'success');

  }

  checkLogin(){
    let useData =JSON.parse(sessionStorage.getItem('$key')!) || [];
     if("komit.bagate@gmail.com" !== useData[0].email){
           this.router.navigate(['/login']);

       }

  } 

}

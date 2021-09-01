import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthLoginGuard } from './auth-login.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
    
  ],
  providers: [AuthGuard,AuthLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

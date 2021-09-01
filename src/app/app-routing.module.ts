import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from './auth-login.guard';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent , canActivate:[AuthLoginGuard]},
  {path:'home', component:HomeComponent , canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

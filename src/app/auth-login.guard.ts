import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private router:Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let isLoggedIn =JSON.parse(sessionStorage.getItem('isLoggedIn')!) || [];
      if(isLoggedIn == 'success'){
        // this.router.navigate(['/home']);
        return false;
    } else {
        return true;
    }
  }
} 
    
   

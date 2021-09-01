import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router :Router , private toastr:ToastrService){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let useData =JSON.parse(sessionStorage.getItem('$key')!) || [];
      let isLoggedIn =JSON.parse(sessionStorage.getItem('isLoggedIn')!) || [];

      if("komit.bagate@gmail.com"!== useData[0].email  && isLoggedIn !== 'success' ){
        this.router.navigate(['/login']);
        return false;
    } else {
        return true;

    }

  }
  
}

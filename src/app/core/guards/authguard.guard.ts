import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../cores/services/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if( this.authService.isLogged) {
      console.log("user is logged");
       console.log(this.authService.isLogged);
      return true;
    }else{
      console.log("user is not logged");
      console.log(this.authService.isLogged);
     
      //alert("you are not logged in");
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    
  }

  
  }
}
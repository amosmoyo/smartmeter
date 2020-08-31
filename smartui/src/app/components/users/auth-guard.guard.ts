import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkIfAuth(state.url);
  }

  private checkIfAuth(url: string) {
    const isAuth = this.auth.getIsAuth();

    if (isAuth) {
      return isAuth;
    }

    this.auth.redirectURL = url;
    this.router.navigate(['/users/login']);
    return false;
  }
}

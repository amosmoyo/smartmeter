import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Iuser } from 'src/app/Iuser';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserData implements Resolve<Iuser> {
  constructor(private auth: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser | import('rxjs').Observable<Iuser> | Promise<Iuser> {
    return this.auth.profile();
  }

}

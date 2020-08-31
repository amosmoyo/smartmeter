import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  authStatus: Subscription;

  isAuth;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log(this.auth.getUser());
    this.isAuth = this.auth.getIsAuth();
    this.authStatus = this.auth.getAuthStatus().subscribe({
      next: (data) => {
        this.isAuth = data;
      }
    });

  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.authStatus.unsubscribe();
  }

}

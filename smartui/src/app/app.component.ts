import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { Routes, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'smartui';

  loading = true;

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe({
      next: (data: Event) => {
        this.checkRouterEvents(data);
      }
    });
  }

  ngOnInit(): void {
    this.auth.autoAuth();
  }

  checkRouterEvents(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationError ||
      routerEvent instanceof NavigationCancel
    ) {
      this.loading = false;
    }
  }
}

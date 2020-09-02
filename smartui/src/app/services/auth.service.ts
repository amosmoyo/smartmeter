import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Itoken, Iuser } from '../Iuser';
import { Router } from '@angular/router';

const url = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token;

  private isAuth = false;

  private authStatusListener = new Subject<boolean>();

  private tokenTimer;

  redirectURL;

  private user: Iuser;

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuth;
  }

  getAuthStatus() {
    return this.authStatusListener.asObservable();
  }

  getUser() {
    return this.user;
  }

  constructor(private http: HttpClient, private router: Router) { }

  signup(user) {
    const headers = new HttpHeaders({
      'Content-TYpe': 'application/json'
    });

    this.http.post(`${url}/register`, user, { headers }).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/users/login']);
      },
      error: (err) => {
        console.log(err);
        this.authStatusListener.next(false);
      }
    });
  }

  login(user): void {
    const headers = new HttpHeaders({
      'Content-TYpe': 'application/json'
    });

    this.http.post(`${url}/login`, user, { headers }).subscribe({
      next: (data: Itoken ) => {
        console.log(data);
        if (data.success) {
          this.user = data.user;
          this.storeToken(data.token, data.expiresIn, data.user);
        }
      },
      error: (err) => {
        console.log(err);
        this.authStatusListener.next(false);
      }
    });
  }

  // logout
  logout() {
    this.token = null;
    this.isAuth = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/users/login']);
  }

  // store token;
  storeToken(token, time, user: Iuser) {
    if (token) {
      this.token = token;
      this.isAuth = true;
      this.authStatusListener.next(true);
      const now = new Date();
      const logoutTime = time * 1000;
      const expiresIn = new Date(now.getTime() + logoutTime);
      this.setAuthData(this.token, expiresIn, user);
      this.authTime(logoutTime);

      if (this.redirectURL) {
        this.router.navigateByUrl(this.redirectURL);
      } else {
        this.router.navigate(['/users/dashboard']);
      }
    }
  }

  // get profile data
  profile(): Observable<Iuser> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<Iuser>(`${url}/dashboard`);
  }

  // auth authefication
  autoAuth() {
    const autoData = this.getAuthData();

    if (!autoData) {
      return;
    }

    const now = new Date();

    const expiresIn = autoData.dateInf.getTime() - now.getTime();

    if (expiresIn > 0 ) {
      this.token = autoData.token;
      this.isAuth = true;
      this.authStatusListener.next(true);
      this.user = JSON.parse(autoData.user);
      this.authTime(expiresIn);

      /*if (this.redirectURL) {
        this.router.navigateByUrl(this.redirectURL);
      } else {
        this.router.navigate(['/home']);
      }*/

    }
  }

  // Local storage
  // store data on localstorage
  private setAuthData(token: string, expiresIn: Date, user: Iuser) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn.toISOString());
    localStorage.setItem('user', JSON.stringify(user));
  }

  // clear auth data
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('user');
  }

  // auth timeout
  private authTime(duration) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  // get localstorage data

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    const user = localStorage.getItem('user');

    if (!token || !expiresIn || !user ) {
      return;
    }

    const dateInf = new Date(expiresIn);
    console.log(dateInf);
    return {
      token, dateInf, user
    };
  }
}

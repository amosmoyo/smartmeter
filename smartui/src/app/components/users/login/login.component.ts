import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  authStatus: Subscription;

  loading;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.authStatus = this.auth.getAuthStatus().subscribe({
      next: (data) => {
        this.loading = data;
      }
    });
  }

  save(form: NgForm) {
   if (form.invalid) {
     return;
   }
   this.loading = true;

   console.log(form.value);
   this.auth.login(form.value);
   form.resetForm();
  }

  ngOnDestroy() {
    this.authStatus.unsubscribe();
  }

}

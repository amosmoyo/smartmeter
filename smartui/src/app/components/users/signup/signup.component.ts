import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Iuser } from 'src/app/Iuser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  authStatus: Subscription;

  loading;

  constructor(private auth: AuthService ) { }

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
    const user: Iuser = {
      fname: form.value.fname,
      lname: form.value.lname,
      userName: form.value.userName,
      email: form.value.email,
      password: form.value.password
    };

    this.auth.signup(user);
    form.resetForm();
  }

  ngOnDestroy(): void {
    this.authStatus.unsubscribe();
  }

}

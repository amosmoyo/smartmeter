import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Iuser } from 'src/app/Iuser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Iuser;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.profile().subscribe({
      next: (data: Iuser) => {
        console.log(data);
        this.user = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}

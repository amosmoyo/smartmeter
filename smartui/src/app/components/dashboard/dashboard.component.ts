import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Iuser, Imetrics } from 'src/app/Iuser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  user: Iuser;

  amount = 50;

  electricity = 50;

  metrics: Imetrics[];

  metricsList: Imetrics[] = [];

  filterOne = 'all';

  time = new Date();

  total;

  constructor(private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    const data = this.route.data.subscribe({
      next: ( data ) => {
        // tslint:disable-next-line: no-string-literal
        this.user = data['user'];
      }
    });

    /* this.auth.profile().subscribe({
      next: ( data: Iuser) => {
        console.log(data);
        this.user = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
    */

    setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.ngOnChanges();

    this.metrics = [
      {name: 'Gas', Month: 'January', Date: '2020-01-01', kwh: 0.001, time: 10},
      {name: 'Power', Month: 'January', Date: '2020-01-21', kwh: 0.002, time: 10},
      {name: 'Water', Month: 'January', Date: '2020-01-09', kwh: 0.003, time: 10},
      {name: 'Gas', Month: 'February', Date: '2020-02-21', kwh: 0.004, time: 10},
      {name: 'Power', Month: 'January', Date: '2020-01-10', kwh: 0.005, time: 10},
      {name: 'Water', Month: 'February', Date: '2020-02-21', kwh: 0.006, time: 10},
      {name: 'Gas', Month: 'January', Date: '2020-01-21', kwh: 0.007, time: 10},
      {name: 'Power', Month: 'January', Date: '2020-01-21', kwh: 0.008, time: 10},
      {name: 'Water', Month: 'February', Date: '2020-02-21', kwh: 0.009, time: 10},
      {name: 'Gas', Month: 'January', Date: '2020-01-21', kwh: 0.01, time: 10},
    ];

    if (this.filterOne === 'all') {
      this.allData();
    }
  }

  allData() {
    this.metricsList = this.metrics;
    if (this.metricsList) {
      this.total = this.getTotal(this.metricsList);
    }
    console.log('data', this.metricsList);
  }

  getTotal(arr: Imetrics[]) {
    return arr.map((x) => x.kwh * x.time * 230).reduce((acc, cur) => acc + cur, 0);
  }

  save(value) {
    console.log('amosmoyo', value.search);
    console.log('amos', value);
    this.filterOne = value.search;
    this.ngOnChanges();
    return;
  }

  showAll() {
    this.filterOne = 'all';
    this.ngOnChanges();
  }

  ngOnChanges() {
    console.log(this.filterOne);
    if (this.filterOne === 'all') {
        this.allData();
    } else {
      this.filterArray(this.filterOne);
    }
  }

  filterArray(data) {
    this.metricsList = this.metrics.filter((x: Imetrics) => {
      if (x.Month === data) {
        return x.Month === data;
      }

      if (x.Date === data) {
        return x.Date === data;
      }

      return  x.name === data;
    });

    if (this.metricsList) {
      this.total = this.getTotal(this.metricsList);
    }
  }

}

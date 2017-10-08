import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs;
  user: object;
  constructor(public dashS:DashboardService, public auth: AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.dashS.viewDashboard().subscribe(e => this.jobs = e);
  }

}

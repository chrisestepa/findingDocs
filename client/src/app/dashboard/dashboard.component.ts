import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs;
  constructor(public dashS:DashboardService) { }

  ngOnInit() {
    this.dashS.viewDashboard().subscribe(e => this.jobs = e);
  }

}

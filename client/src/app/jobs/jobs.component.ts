import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs;
  constructor(public dashService:DashboardService) { }

  ngOnInit() {
    this.jobs = this.dashService.viewDashboard();
  }

}

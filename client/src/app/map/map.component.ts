import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { AlertsService } from '../services/alerts.service';
import { JobService } from '../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  jobs;
  singleJob;
  control: boolean = true;
  user: any;
  zoom: number = 11;
  constructor(private jobS: JobService, private router:Router, private route:ActivatedRoute, public dashS: DashboardService, public auth: AuthService, public alertS: AlertsService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
    this.dashS.viewDashboard().subscribe(e => this.jobs = e);
  }

  getJobInfo(id) {
    this.dashS.viewSingleJob(id).subscribe(e => {
      this.singleJob = e;
      this.control = !this.control;
    })
  }

  apply(id) {
    this.jobS.apply(id, this.user._id).subscribe(() => {
      this.router.navigate(['dashboard'])
    });
  }

}

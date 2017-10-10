import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DashboardService } from './services/dashboard.service';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'findingDocs';
  user:any;
  jobs:any;
  status:boolean = false;
  constructor(public alertS:AlertsService, public auth:AuthService, public dashS:DashboardService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );

    this.dashS.viewDashboard().subscribe(e => this.jobs = e);
  }

}

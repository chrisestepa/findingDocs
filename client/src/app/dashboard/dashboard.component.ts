import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { AlertsService } from '../services/alerts.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs;
  user: object;
  zoom:number = 17;
  constructor(public dashS:DashboardService, public auth: AuthService, public alertS:AlertsService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
    this.dashS.viewDashboard().subscribe(e => this.jobs = e);
  }

}

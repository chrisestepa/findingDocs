import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  user: any;
  jobs: any;
  userAlerts: any;
  notifications: Array<any> = []
  constructor(public auth: AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }
}

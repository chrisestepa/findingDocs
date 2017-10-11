import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../services/alerts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
alerts:any;
  constructor(public alertServ: AlertsService, public auth: AuthService) { }

  ngOnInit() {
    this.alertServ.getNotifications().subscribe( alerts => this.alerts=alerts);
    console.log(this.alerts)
  }

}

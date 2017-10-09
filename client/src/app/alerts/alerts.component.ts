import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CentersService } from '../services/centers.service';
import { Router } from '@angular/router';
import { AlertsService } from '../services/alerts.service';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  user:object;
  alerts:object;
  centers:object;
  constructor(public alertServ: AlertsService, public auth: AuthService, public centerServ: CentersService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.alertServ.getAlerts().subscribe( alerts => this.alerts=alerts);

    // this.centerServ.getCenters()
    //   .subscribe( centers => this.centers = centers);
    //
        // console.log("CENTERS: " + this.centers)
      // console.log("USER: " + this.user)

  }

}

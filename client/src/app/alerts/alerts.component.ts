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
  alerts:any;
  constructor(public router:Router, public alertServ: AlertsService, public auth: AuthService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
    this.alertServ.getAlerts().subscribe( alerts => this.alerts=alerts);
  }

  deleteAlert(id){
    this.alertServ.deleteAlert(id).subscribe(() => {
      this.alerts = this.alerts.filter(
        (alert) => alert._id !== id)
      });
    }

}

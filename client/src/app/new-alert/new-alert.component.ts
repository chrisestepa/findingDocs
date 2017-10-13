import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertsService } from '../services/alerts.service';
import { Router } from '@angular/router';
import { CentersService } from '../services/centers.service';

@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.component.html',
  styleUrls: ['./new-alert.component.css']
})
export class NewAlertComponent implements OnInit {
  formInfo = {
    title:"",
    center:"",
    speciality:"",
  }

  message: string;
  user:any;
  centers:object;
  constructor(public alertS: AlertsService, public centerS:CentersService, public auth:AuthService, public router: Router) {

  }
  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
    this.centerS.getCenters()
      .subscribe((centers) => this.centers = centers);
  }

  newAlert(){
    const {title, center, speciality} = this.formInfo;
    const doctor = this.user._id;
    if(title != "" && center != "" && doctor != "") {
      this.alertS.newAlert(title, center, doctor, speciality)
        .map(alert => console.log(alert))
        .subscribe((alert) => this.router.navigate(['/alerts']))
    } else {
      this.message = "Todos los campos son obligatorios."
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { JobService } from '../services/job.service';
import { Router } from '@angular/router';
import { CentersService } from '../services/centers.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  formInfo = {
    title:"",
    center:"",
    date:"",
    speciality:"",
    description:""
  }

  message: string;
  user:object;
  centers:object;
  constructor(public jobS: JobService, public centerS:CentersService, public auth:AuthService, public router: Router) {
  this.user = this.auth.getUser();
  this.auth.getLoginEventEmitter()
      .subscribe( user => this.user=user );
  }
  ngOnInit() {
    this.centerS.getCenters()
      .subscribe((centers) => this.centers = centers);
  }

  newJob() {
    const { title, center, date, speciality, description } = this.formInfo;
    console.log(this.formInfo);
    if (title != "" && center != "" && date != "" && speciality != "" && description) {
      this.jobS.createJob(title, center, date, speciality, description)
        .map(job => console.log(job))
        .subscribe((job) => this.router.navigate(['/dashboard']))
    } else {
      this.message = "All fields required";
    }
  }

}

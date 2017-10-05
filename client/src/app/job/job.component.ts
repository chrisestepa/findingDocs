import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { JobService } from '../services/job.service';
import { Router } from '@angular/router';

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

  user:object;
  constructor(public jobS: JobService, public auth:AuthService, public router: Router) {
  this.user = this.auth.getUser();
  this.auth.getLoginEventEmitter()
      .subscribe( user => this.user=user );
  }
  ngOnInit() {
  }

  newJob() {
    const { title, center, date, speciality, description } = this.formInfo;
    if (title != "" && center != "" && date != "" && speciality != "" && description) {
      this.jobS.createJob(title, center, date, speciality, description)
        .map(job => console.log(job))
        .subscribe((job) => this.router.navigate(['/dashboard']))
    } else {
      console.log("All fields required");
    }
  }

}

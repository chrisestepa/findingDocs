import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../services/job.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job;
  user;
  zoom:number = 15;
  constructor(public auth:AuthService, private router:Router, private route:ActivatedRoute, private jobS: JobService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJob(params['id']);
    });
  }

  getJob(id){
    this.jobS.getJob(id).subscribe((job) => {
    this.job = job;
    });
  }

  applyJob(id, user){
    this.jobS.apply(id, user).subscribe(() => {
      this.router.navigate(['dashboard'])
    });
  }

  deleteJob(id){
    this.jobS.delete(id).subscribe(() => {
      this.router.navigate(['dashboard'])
    });
  }

  acceptUser(id, user){
    this.jobS.acceptUser(id, user).subscribe(() => {
      this.router.navigate(['dashboard'])
    })
  }

  deleteUser(id, user){
    this.jobS.deleteUser(id, user).subscribe(() => {
      this.router.navigate(['dashboard'])
    })
  }
}

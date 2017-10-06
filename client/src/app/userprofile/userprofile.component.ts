import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  formInfo = {
    username:"",
    password:"",
    name:"",
    phone:"",
    collegiate:"",
    speciality:""
    }

    user:object;
  control:boolean = true;
  constructor(public auth:AuthService, public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
  }

upload(){
  const { username, password, name, phone, collegiate, speciality } = this.formInfo;
  this.auth.upload(username, password, name, phone, collegiate, speciality)
    .map(user => console.log(user))
    .subscribe((user) => this.router.navigate(['/user']))
}

}

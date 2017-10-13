import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  formInfo = {
    name: "",
    phone: "",
    collegiate: "",
    speciality: "",
    email: ""
  }

  message: string;
  user: any;
  control: boolean = true;
  constructor(public auth: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => {this.user = user;
        if(user){
        this.formInfo = {
          name: user.name,
          phone: user.phone,
          collegiate: user.collegiate,
          speciality: user.speciality,
          email: user.email}
        }});

  }

  upload() {
  const { name, phone, email, collegiate, speciality } = this.formInfo;
      this.control = !this.control;
      this.auth.upload(name, phone, email, collegiate, speciality)
        .map(user => console.log(user))
        .subscribe((user) => this.router.navigate(['/user']))
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:"",
  name:"",
  phone:"",
  email:"",
  collegiate:"",
  speciality:"",
  role:""
  }

message: string;
user:any;
constructor(public auth:AuthService, public router: Router) {
  this.user = this.auth.getUser();
  this.auth.getLoginEventEmitter()
      .subscribe( user => this.user=user );
}

  ngOnInit() {
  }

  signup(){
    const {username, password, name, phone, email, collegiate, speciality, role} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.signup(username, password, name, phone, email, collegiate, speciality, role)
      .map(user => console.log(user))
      .subscribe((user) => this.router.navigate(['/dashboard']))
    } else{
      this.message="Todos los campos son obligatorios."
    }
  }

}

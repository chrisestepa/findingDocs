import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  formInfo = {
    username:"",
    password:"",
    name:"",
    phone:"",
    collegiate:"",
    speciality:"",
    }

  message: string;
  user:object;
  constructor(public auth:AuthService, public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
  }

  askForInvitation(){
    console.log("I WANT AN INVITATION!");
  }

}

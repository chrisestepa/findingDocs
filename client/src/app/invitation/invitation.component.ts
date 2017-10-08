import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import {InvitationService} from '../services/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  formInfo = {
    username:"",
    collegiate:"",
    speciality:"",
    name:"",
    phone:""
    }

  control: string;
  message: string;
  user:object;
  constructor(public auth:AuthService, public invS:InvitationService, public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
  }

  askForInvitation(){
    const {username, collegiate, speciality, name, phone} = this.formInfo;
    if(username != "" && collegiate != "" && speciality != "" && name != "" && phone != ""){
      this.invS.new(username, collegiate, speciality, name, phone)
      .map(inv => this.control = "Invitación enviada.")
      .subscribe((inv) => this.router.navigate(['home']))
    } else{
      this.message="All fields required."
    }
  }

}

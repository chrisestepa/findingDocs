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
    role:"",
    username:"",
    collegiate:"",
    speciality:"",
    name:"",
    phone:"",
    email:"",
    }

  control: string;
  message: string;
  user:any;
  constructor(public auth:AuthService, public invS:InvitationService, public router: Router) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  askForInvitation(){
    const {role, username, collegiate, speciality, name, phone, email} = this.formInfo;
    if(role != "" && username != "" && collegiate != "" && speciality != "" && name != "" && phone != "" && email != ""){
      this.invS.new(role, username, collegiate, speciality, name, phone, email)
      .map(inv => this.control = "Invitación enviada.")
      .subscribe((inv) => this.router.navigate(['home']))
    } else{
      this.message="Todos los campos son obligatorios."
    }
  }

}

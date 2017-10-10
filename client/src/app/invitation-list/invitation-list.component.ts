import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InvitationService } from '../services/invitation.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})

export class InvitationListComponent implements OnInit {
  user;
  invitations;

    message: string;
  constructor(public router: Router, public invS:InvitationService, public auth: AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.invS.getList().subscribe(e => this.invitations = e);
  }

  create(inv){
    const {username, password, name, phone, collegiate, speciality, role, email} = inv;
    if(username != "" && password != ""){
      this.auth.signup(username, password, name, phone, email, collegiate, speciality, role)
      .map(user => console.log(user))
      .subscribe((user) => this.router.navigate(['/dashboard']))
    } else{
      this.message="Todos los campos son oligatorios."
    }
  }

}

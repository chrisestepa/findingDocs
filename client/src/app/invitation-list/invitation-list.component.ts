import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InvitationService } from '../services/invitation.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})
export class InvitationListComponent implements OnInit {
  user;
  invitations;
  constructor(public invS:InvitationService, public auth: AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.invS.getList().subscribe(e => this.invitations = e);
  }

}

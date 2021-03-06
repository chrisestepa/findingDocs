import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InvitationService} from '../services/invitation.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-delete-invitation',
  templateUrl: './delete-invitation.component.html',
  styleUrls: ['./delete-invitation.component.css']
})
export class DeleteInvitationComponent implements OnInit {
  invitation;
  user;
  constructor(public auth:AuthService, private router:Router, private route:ActivatedRoute, private invS: InvitationService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
    this.route.params.subscribe(params => {
      this.getInvitation(params['id']);
    });
  }

  getInvitation(id){
    this.invS.get(id).subscribe((inv) => {
    this.invitation = inv;
    });
  }

  deleteInvitation(id){
    this.invS.delete(id).subscribe(() => {
      this.router.navigate(['invitations'])
    });
  }

}

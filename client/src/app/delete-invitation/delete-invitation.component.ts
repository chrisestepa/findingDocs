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
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['id']}`);
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

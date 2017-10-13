import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  user: any;
  users;
  constructor(public auth: AuthService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
    this.auth.getUsers().subscribe(u => this.users = u);
  }

  deleteUser(id){
    console.log("entro en el componente con id: " + id)
    this.auth.delete(id).subscribe();
  }

}

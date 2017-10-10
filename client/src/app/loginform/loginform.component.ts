import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo: LoginForm = {
    username: "",
    password: ""
  };
  message: string;
  user: object;
  constructor(public auth: AuthService, public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  login() {
    const { username, password } = this.formInfo;
    if (username != "" && password != "") {
      this.auth.login(username, password)
        .map(user => console.log(user))
        .subscribe((user) => this.router.navigate(['/dashboard']),
        (err) => this.message = err);

    } else {
      this.message = "Debes indicar un DNI y una contraseña.";
    }
  }
}

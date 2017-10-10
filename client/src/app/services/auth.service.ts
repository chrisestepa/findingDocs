import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const BASEURL = environment.BASEURL;

@Injectable()
export class AuthService {

  private user: object;
  private userLoginEvent: EventEmitter<any> = new EventEmitter<any>();
  private options = { withCredentials: true };

  constructor(private http: Http, public router: Router) {
    this.isLoggedIn().subscribe();
  }

  public getLoginEventEmitter(): EventEmitter<any> {
    return this.userLoginEvent;
  }

  public getUser() {
    return this.user;
  }

  private emitUserLoginEvent(user) {
    this.user = user;
    this.userLoginEvent.emit(user);
    return user;
  }

  private handleError(e) {
    console.log("AUTH ERROR");
    return Observable.throw(e.json().message);
  }

  getUsers () {
    return this.http.get(`${BASEURL}/userslist`, this.options)
      .map((res) => res.json());
  }

  signup(username, password, name, phone, email, collegiate, speciality, role) {
    console.log("entro en el servicio")
    return this.http.post(`${BASEURL}/signup`, { username, password, name, phone, email, collegiate, speciality, role }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${BASEURL}/login`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASEURL}/logout`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(null))
      .subscribe((user) => this.router.navigate(['']))
  }

  upload(username, password, name, phone, collegiate, speciality) {
    return this.http.put(`${BASEURL}/update`, { username, password, name, phone, collegiate, speciality }, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }
}

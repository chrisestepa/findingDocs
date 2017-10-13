import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const BASEURL = environment.BASEURL + '/api';

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
    return Observable.throw(e.json().message);
  }

  getUsers () {
    return this.http.get(`${BASEURL}/userslist`, this.options)
      .map((res) => res.json());
  }

  signup(username, password, name, phone, email, collegiate, speciality, role) {
    return this.http.post(`${BASEURL}/signup`, { username, password, name, phone, email, collegiate, speciality, role }, this.options)
      .map(res => {this.http.post(`${BASEURL}/sayHello`, { name, email }, this.options);
                  res.json()})
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
      .subscribe(() => this.router.navigate(['home']))
  }

  upload(name, phone, email, collegiate, speciality) {
    return this.http.put(`${BASEURL}/update`, { name, phone, email, collegiate, speciality }, this.options)
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

  delete(id){
    console.log("entro en el serivicio con id: " + id)
    return this.http.get(`${BASEURL}/delete/${id}`, this.options)
  }

}

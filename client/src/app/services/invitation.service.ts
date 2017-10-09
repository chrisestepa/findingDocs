import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InvitationService {

  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }

  private handleError(e) {
    return Observable.throw(e.json().message);
  }

  getList() {
    return this.http.get(`${this.BASEURL}/invitations`, this.options)
      .map((res) => res.json());
  }

  new(role, username, collegiate, speciality, name, phone) {
    return this.http.post(`${this.BASEURL}/ask`, { role, username, collegiate, speciality, name, phone }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  get(id) {
    return this.http.get(`${this.BASEURL}/invitations/${id}`)
      .map((res) => res.json());
  }

  delete(id) {
    return this.http.get(`${this.BASEURL}/deleteinvitation/${id}`, this.options)
  }

}

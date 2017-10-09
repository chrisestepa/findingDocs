import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

@Injectable()
export class JobService {

  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }

  private handleError(e) {
    console.log("CREATE ERROR");
    return Observable.throw(e.json().message);
  }

  createJob(title, center, date, speciality, description) {
    return this.http.post(`${this.BASEURL}/job/new`, { title, center, date, speciality, description }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getJob(id) {
    return this.http.get(`${this.BASEURL}/job/${id}`)
      .map((res) => res.json());
  }

  apply(id, user) {
    return this.http.put(`${this.BASEURL}/job/apply/${id}/${user}`, "")
      .map((res) => res.json());
  }

  delete(id) {
    return this.http.get(`${this.BASEURL}/deletejob/${id}`, this.options)
  }

}

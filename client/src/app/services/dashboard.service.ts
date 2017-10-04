import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';

@Injectable()
export class DashboardService {

  public BASEURL = environment.BASEURL + "/dashboard";
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }

  // private handleError(e) {
  //   console.log("AUTH ERROR");
  //   return Observable.throw(e.json().message);
  // }

  viewDashboard(){
    return this.http.get(`${this.BASEURL}/dashboard`, this.options)
       .map((res) => res.json());
  }

}

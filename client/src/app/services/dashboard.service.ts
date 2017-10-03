import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

const BASEURL = environment.BASEURL + "/dashboard";

@Injectable()
export class DashboardService {

  private job: object;
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }

  private handleError(e) {
    console.log("AUTH ERROR");
    return Observable.throw(e.json().message);
  }

  viewDashboard(){
    return this.http.get(`${this.BASE_URL}/dashboard`)
       .map((res) => res.json());
  }


}

import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';

@Injectable()
export class DashboardService {

  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }
  
  viewDashboard(){
    return this.http.get(`${this.BASEURL}/dashboard`, this.options)
       .map((res) => res.json());
  }

}

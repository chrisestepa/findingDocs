import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';


@Injectable()
export class CentersService {

  public BASEURL = environment.BASEURL + '/api';
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }

  private handleError(e) {
    console.log("CREATE ERROR");
    return Observable.throw(e.json().message);
  }

  getCenters() {
    return this.http.get(`${this.BASEURL}/centers`, this.options)
      .map((res) => res.json());
  }
}

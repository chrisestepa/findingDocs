import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';


@Injectable()
export class AlertsService {

  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };

  constructor(private http: Http) {

  }

  private handleError(e) {
    console.log("CREATE ERROR");
    return Observable.throw(e.json().message);
  }

  getAlerts() {
    return this.http.get(`${this.BASEURL}/alerts`, this.options)
      .map((res) => res.json());
  }

  newAlert(title, center, doctor, speciality){
    return this.http.post(`${this.BASEURL}/alert/new`, { title, center, doctor, speciality}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}

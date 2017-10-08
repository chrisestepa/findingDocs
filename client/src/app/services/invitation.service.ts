import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';

@Injectable()
export class InvitationService {

    public BASEURL = environment.BASEURL;
    private options = { withCredentials: true };

    constructor(private http: Http) {

    }

    getList(){
      return this.http.get(`${this.BASEURL}/invitations`, this.options)
         .map((res) => res.json());
    }

    get(id) {
      return this.http.get(`${this.BASEURL}/invitations/${id}`)
        .map((res) => res.json());
    }

    delete(id){
      return this.http.get(`${this.BASEURL}/deleteinvitation/${id}`, this.options)
    }

  }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as moment from 'moment';
import {environment} from "../../../environments/environment.dev";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post<any>(environment.apiURL + '/login', data, httpOptions)
  }

  logout(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post<any>(environment.apiURL + '/logout', httpOptions)

    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration(): any {
    const expiration = localStorage.getItem("expires_at");

    if (expiration != null) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
}

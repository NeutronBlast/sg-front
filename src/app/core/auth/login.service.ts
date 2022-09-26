import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateLogin(data: any) {
    /* route: post:login */
  }

  logout(data: any){
    /* route: post:logout */
  }
}

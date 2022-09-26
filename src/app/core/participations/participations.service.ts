import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { environment } from "../../../environments/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  constructor(private http: HttpClient) { }

  getParticipants(): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/users')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  postParticipants(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post<any>(environment.apiURL + '/users', data, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { environment } from "../../../environments/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  constructor(private http: HttpClient) { }

  getParticipantsUnitOfTime(data: any): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/report', data)
  }

  getParticipants(): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/users')
  }

  getParticipant(id: any): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/users/' + id)
  }

  postParticipants(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post<any>(environment.apiURL + '/users', data, httpOptions);
  }

  putParticipants(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.put<any>(environment.apiURL + '/users/' + data.id, data, httpOptions);
  }

  deleteParticipants(id: any): Observable<any> {
    return this.http.delete<any>(environment.apiURL + '/users/' + id);
  }

  changeStatusParticipant(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.put<any>(environment.apiURL + '/users/disable/' + data.id, data, httpOptions);
  }
}

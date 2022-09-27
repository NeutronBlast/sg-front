import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CurrentSessionService} from "../auth/current.session.service";

@Injectable({
  providedIn: 'root'
})
export class ParticipantGuard implements CanActivate {
  constructor(private router: Router,
              private sessionService: CurrentSessionService) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sessionService.isParticipant();
  }

}

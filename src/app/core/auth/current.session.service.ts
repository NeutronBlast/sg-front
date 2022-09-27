import { Injectable } from '@angular/core';

@Injectable()
export class CurrentSessionService {

  constructor() { }

  setSession(authResult: any) {
    localStorage.setItem('token', authResult.authorization.token);
  }
}

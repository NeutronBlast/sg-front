import { Injectable } from '@angular/core';

@Injectable()
export class CurrentSessionService {
  private localStorageService;
  private currentSession: any;

  constructor() {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setSession(authResult: any) {
    localStorage.setItem('token', authResult.authorization.token);
    localStorage.setItem('role', authResult.user.role);
    localStorage.setItem('id', authResult.user.id)
  }

  isAdmin(){
    return this.currentSession.role == 'Administrator';
  }

  isParticipant(){
    return this.currentSession.role == 'Participant';
  }

  loadSessionData() {
    return {
      role: localStorage.getItem('role'),
      token: localStorage.getItem('token'),
      status: localStorage.getItem('id')
    }
  }
}

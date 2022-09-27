import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../core/auth/login.service";
import { Router } from "@angular/router";
import {ParticipationsService} from "../../core/participations/participations.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public status: any;

  constructor(private login: LoginService,
              private pS: ParticipationsService,
              private router: Router) {
    this.pS.getParticipant(localStorage.getItem("id")).subscribe((res) => {
      this.status = res.status;
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.login.logout().subscribe((res) => {
      this.router.navigate(['auth/login'])
    })
  }

}

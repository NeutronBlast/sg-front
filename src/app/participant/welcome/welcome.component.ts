import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../core/auth/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private login: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.login.logout().subscribe((res) => {
      this.router.navigate(['auth/login'])
    })
  }

}

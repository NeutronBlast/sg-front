import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../core/auth/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

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

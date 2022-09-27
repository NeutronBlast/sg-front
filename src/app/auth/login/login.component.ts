import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../core/auth/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../core/classes/user";
import { MatSnackBar } from "@angular/material/snack-bar";
import {CurrentSessionService} from "../../core/auth/current.session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(private login: LoginService,
              private sess: CurrentSessionService,
              private snackbar: MatSnackBar,
              private router: Router,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: [
        ''
      ],
      password: [
        ''
      ]
    });
  }

  onSubmit(){
    let user = new User();
    user.email = this.loginForm.value.email;
    user.password = this.loginForm.value.password;

    this.login.login(user).subscribe({
      next: (res) => {
        this.sess.setSession(res);
        this.nextPage(res);
      },
      error: (err) => {
        this.snackbar.open('Email/Password invalid', 'Ok')
      }
    })
  }

  nextPage(data: any){
    if (data.user.role == 'Participant'){
      this.router.navigate(['welcome'])
    }
    else if (data.user.role == 'Administrator'){
      this.router.navigate(['dashboard'])
    }
  }

}

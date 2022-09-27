import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ParticipationsService} from "../../core/participations/participations.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RegisterService} from "../../core/auth/register.service";
import {User} from "../../core/classes/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  formErrors: any = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  };
  validationMessages: any = {
    email: {
      required: 'Email is required',
      minLength: 'Email cannot be shorter than 7 characters',
      maxLength: 'Email cannot be longer than 150 characters',
      pattern: 'Email address must be valid'
    },
    first_name: {
      required: 'First name is required',
      minlength: 'First name cannot be shorter than 2 characters',
      maxLength: 'First name cannot be longer than 100 characters'
    },
    last_name: {
      required: 'Last name is required',
      minlength: 'Last name cannot be shorter than 2 characters',
      maxLength: 'Last name cannot be longer than 100 characters'
    },
    password: {
      required: 'Password is required',
      pattern: 'Password format must be valid'
    }
  };

  constructor(public dialogRef: MatDialogRef<any>,
              private fb: FormBuilder,
              private router: Router,
              private register: RegisterService,
              private snackbar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(150),
          Validators.pattern(/^\S+@\S+\.\S+$/)
        ]
      ],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
        ]
      ],
      date_of_birth: [
        ''
      ]
    });

    this.registerForm.valueChanges.subscribe((data: any) => {
      this.onValueChange(data);
    });
  }
  onValueChange(data?: any): void{
    /* If form hasn't been created */
    if (!this.registerForm){
      return;
    }

    const form = this.registerForm;
    for (const field in this.formErrors){
      if (this.formErrors.hasOwnProperty(field)){
        // clear previous error message if any
        this.formErrors[field] = '';
        const control = form.get(field);

        // if field is modified by user
        if (control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];

          // check if i'm adding the error message to the field
          for (const key in control.errors){
            if (control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    if (this.registerForm.valid){
      let data: User = new User();
      data.first_name = this.registerForm.value.first_name;
      data.last_name = this.registerForm.value.last_name;
      data.email = this.registerForm.value.email;
      data.password = this.registerForm.value.password;
      data.date_of_birth = this.registerForm.value.date_of_birth.format('YYYY-MM-DD');

      this.register.register(data).subscribe({
        next: (res) => {
          this.router.navigate(['welcome'])
        },
        error: err => {
          let errorMessage = err.error.errors.email[0]

          this.snackbar.open(errorMessage, 'Ok');
        }
      })
    }
  }
}

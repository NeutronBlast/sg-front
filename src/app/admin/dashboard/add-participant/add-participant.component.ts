import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
  participantForm: FormGroup | any;
  loading = true;
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
      pattern: 'Password should contain at least 8 characters, one letter (lowercase and uppercase)' +
        'one number and one special character'
    }
  };

  constructor(public dialogRef: MatDialogRef<any>,
              private fb: FormBuilder) {
    this.createForm();
    this.loading = false;
  }

  ngOnInit(): void {

  }

  createForm(): void {
    this.participantForm = this.fb.group({
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
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ],
      date_of_birth: [
        ''
      ]
    });

    this.participantForm.valueChanges.subscribe((data: any) => {
      this.onValueChange(data);
    });
  }
  onValueChange(data?: any): void{
    /* If form hasn't been created */
    if (!this.participantForm){
      return;
    }

    const form = this.participantForm;
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

}

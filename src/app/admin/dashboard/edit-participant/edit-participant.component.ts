import {Component, Inject, Input, OnInit} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../core/classes/user";
import { Router } from "@angular/router";
import { ParticipationsService } from "../../../core/participations/participations.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  participant: any;

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
              private fb: FormBuilder,
              private router: Router,
              private pS: ParticipationsService,
              private snackbar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.getParticipant(data.id)
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.participantForm = this.fb.group({
      email: [
        this.participant.email,
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(150),
          Validators.pattern(/^\S+@\S+\.\S+$/)
        ]
      ],
      first_name: [
        this.participant.first_name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]
      ],
      last_name: [
        this.participant.last_name,
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
        this.participant.date_of_birth
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

  onSubmit(){
    if (this.participantForm.valid){
      let data: User = new User();
      data.id = this.data.id;
      data.first_name = this.participantForm.value.first_name;
      data.last_name = this.participantForm.value.last_name;
      data.email = this.participantForm.value.email;
      data.password = this.participantForm.value.password;
      data.date_of_birth = this.participantForm.value.date_of_birth == this.participant.date_of_birth ?
        this.participant.date_of_birth : this.participantForm.value.date_of_birth.format('YYYY-MM-DD');

      this.pS.putParticipants(data).subscribe({
        next: (res) => {
          this.dialogRef.close();
          window.location.reload();
        },
        error: err => {
          console.log(err)
          let errorMessage = err.error.errors.email[0]

          this.snackbar.open(errorMessage, 'Ok');
        }
      })
    }
  }

  getParticipant(id: any) {
    this.pS.getParticipant(id).subscribe((participant) => {
      this.participant = participant;
      this.createForm();
      this.loading = false;
    })
  }

}

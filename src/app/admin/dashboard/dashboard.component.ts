import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddParticipantComponent} from "./add-participant/add-participant.component";
import {EditParticipantComponent} from "./edit-participant/edit-participant.component";
import {
  DeleteParticipantConfirmationComponent
} from "./delete-participant-confirmation/delete-participant-confirmation.component";
import {
  DisableParticipantConfirmationComponent
} from "./disable-participant-confirmation/disable-participant-confirmation.component";
import {ParticipationsService} from "../../core/participations/participations.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ReportRequest} from "../../core/classes/report_request";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  participantForm: FormGroup | any;
  participants: number = 0;
  formErrors: any = {
    unit: '',
    number: ''
  };

  validationMessages: any = {
    unit: {
      required: 'Unit is required',
    },
    number: {
      required: 'Number is required',
      pattern: 'Number field should be numeric'
    }
  };

  displayedColumns: string[] = ['full_name', 'date_of_birth', 'email', 'status', 'actions'];
  dataSource: any = [];
  loading = true;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private pS: ParticipationsService) {
    this.createForm();
    this.getParticipantsList();
  }

  getParticipantsList(){
    this.pS.getParticipants().subscribe((participants) => {
      this.dataSource = participants;
      this.loading = false;
    })
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.participantForm = this.fb.group({
      unit: [
        '',
        [
          Validators.required
        ]
      ],
      number: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(0|[1-9][0-9]*)$/)
        ]
      ]
    });
  }


  openDialog() {
    this.dialog.open(AddParticipantComponent, {
      panelClass: 'panel'
    })
  }

  openDialogEdit(id: number) {
    this.dialog.open(EditParticipantComponent, {
      panelClass: 'panel',
      data: {
        id: id
      }
    })
  }

  deleteConfirmation(id: number) {
    this.dialog.open(DeleteParticipantConfirmationComponent, {
      width: '400px',
      data: {
        id: id
      }
    })
  }

  disableConfirmation(id: number, status: string) {
    this.dialog.open(DisableParticipantConfirmationComponent, {
      width: '400px',
      data: {
        id: id,
        status: status
      }
    })
  }

  validate(): void {
    const form = this.participantForm;
    for (const field in this.formErrors){

    if (this.formErrors.hasOwnProperty(field)){
      // clear previous error message if any
      this.formErrors[field] = '';
      const control = form.get(field);

      // if field is modified by user
      if (control && !control.valid){
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

  formatErrors(){
    let result = '';
    let keys = Object.keys(this.formErrors);

    keys.forEach((key: any, index: any) => {
      if (this.formErrors[key] != '') {
        if (index < keys.length - 1){
          result = result + this.formErrors[key] + ', '
        }
        else {
          result = result + this.formErrors[key]
        }

      }
    })

    return result;
  }

  onSubmit() {
    this.validate();
    let errors = this.formatErrors();

    if (!this.participantForm.valid){
      this.snackbar.open(errors, 'Ok');
    }

    else {
      let reportRequest = new ReportRequest();
      reportRequest.unit = this.participantForm.value.unit;
      reportRequest.number = this.participantForm.value.number;
      this.pS.getParticipantsUnitOfTime(reportRequest).subscribe((resp) => {
        this.participants = resp.number;
        this.snackbar.open('Successfully updated the number of participants. Current number of participants ' +
          'in the last ' + reportRequest.number + ' ' + reportRequest.unit.toLowerCase() + ': ' + this.participants, 'Ok')
      })
    }
  }
}

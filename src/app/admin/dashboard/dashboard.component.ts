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

export interface User {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: User[] = [
  {position: 'Frank Hesse', name: '1999-08-01', weight: 'hyperschnell11@outlook.sk', symbol: 'Active'},
  {position: 'Leo Barnes', name: '1999-07-02', weight: 'minoraiolax@gmail.com', symbol: 'Active'},
  {position: 'Thomas Leonhart', name: '1998-01-04', weight: 'th3father@gmx.com', symbol: 'Active'},
  {position: 'Victoria Goldsmichdt', name: '1994-01-02', weight: 'hello777@mail.com', symbol: 'Active'},
  {position: 'Leo Decarriere', name: '1999-01-03', weight: 'coolguy099@outlook.es', symbol: 'Active'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AddParticipantComponent, {
      width: '600px',
    })
  }

  openDialogEdit() {
    this.dialog.open(EditParticipantComponent, {
      width: '600px',
    })
  }

  deleteConfirmation() {
    this.dialog.open(DeleteParticipantConfirmationComponent, {
      width: '400px',
    })
  }

  disableConfirmation() {
    this.dialog.open(DisableParticipantConfirmationComponent, {
      width: '400px',
    })
  }
}

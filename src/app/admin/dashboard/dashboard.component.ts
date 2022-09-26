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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['full_name', 'date_of_birth', 'email', 'status', 'actions'];
  dataSource: any = [];
  loading = true;

  constructor(public dialog: MatDialog,
              private pS: ParticipationsService) {
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
}

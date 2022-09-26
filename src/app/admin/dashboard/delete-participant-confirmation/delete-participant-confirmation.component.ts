import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ParticipationsService } from "../../../core/participations/participations.service";

@Component({
  selector: 'app-delete-participant-confirmation',
  templateUrl: './delete-participant-confirmation.component.html',
  styleUrls: ['./delete-participant-confirmation.component.css']
})
export class DeleteParticipantConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    private pS: ParticipationsService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.pS.deleteParticipants(this.data.id).subscribe({
      next: (res) => {
        this.dialogRef.close();
        window.location.reload();
      },
      error: err => {
        console.log(err)
      }
    })
  }

}

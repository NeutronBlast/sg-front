import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AddParticipantComponent } from './dashboard/add-participant/add-participant.component';
import { EditParticipantComponent } from './dashboard/edit-participant/edit-participant.component';
import { DeleteParticipantConfirmationComponent } from './dashboard/delete-participant-confirmation/delete-participant-confirmation.component';
import { DisableParticipantConfirmationComponent } from './dashboard/disable-participant-confirmation/disable-participant-confirmation.component';
import { NavigationBarComponent } from './dashboard/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './dashboard/footer-bar/footer-bar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    DeleteParticipantConfirmationComponent,
    DisableParticipantConfirmationComponent,
    NavigationBarComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

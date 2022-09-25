import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from "./welcome/welcome.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class ParticipantModule { }

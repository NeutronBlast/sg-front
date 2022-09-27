import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ParticipationsService } from "./participations/participations.service";
import { environment } from "../../environments/environment.dev";
import { LoginService } from "./auth/login.service";
import { RegisterService } from "./auth/register.service";
import {CurrentSessionService} from "./auth/current.session.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ParticipationsService,
    LoginService,
    RegisterService,
    CurrentSessionService,
    {provide: 'serverURL', useValue: environment.apiURL}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule){
      throw new Error(
        'CoreModule is already loaded. Import it in AppModule only'
      );
    }
  }

  serverURL = environment.apiURL;
}

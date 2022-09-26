import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ParticipationsService } from "./participations/participations.service";
import {environment} from "../../environments/environment.dev";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ParticipationsService,
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

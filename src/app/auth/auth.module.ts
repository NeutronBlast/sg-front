import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import { RegisterComponent } from './register/register.component';



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from "./angular-material-module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxModule} from "./ngx.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

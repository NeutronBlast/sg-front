import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

const ANGULAR_MATERIAL_MODULES = [
  CommonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatMomentDateModule,
  MatDatepickerModule,
  MatTableModule,
  MatGridListModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    ...ANGULAR_MATERIAL_MODULES
  ],
  exports: [
    ...ANGULAR_MATERIAL_MODULES
  ]
})
export class AngularMaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

const ANGULAR_MATERIAL_MODULES = [
  CommonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
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

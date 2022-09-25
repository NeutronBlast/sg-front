import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from "ngx-avatars";

const NGX_MODULES = [
  AvatarModule
]

@NgModule({
  declarations: [],
  imports: [
    ...NGX_MODULES
  ],
  exports: [
    ...NGX_MODULES
  ]
})
export class NgxModule { }

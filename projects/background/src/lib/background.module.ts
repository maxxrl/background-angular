import { NgModule } from '@angular/core';
import { BackgroundComponent } from './background.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    BackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundComponent
  ]
})
export class BackgroundModule { }

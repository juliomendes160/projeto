import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';



@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
	AngularComponent
  ]
})
export class AngularModule { }

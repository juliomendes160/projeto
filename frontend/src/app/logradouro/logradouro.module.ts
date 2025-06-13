import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogradouroComponent } from './logradouro.component';



@NgModule({
  declarations: [
    LogradouroComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
	LogradouroComponent
  ]
})
export class LogradouroModule { }

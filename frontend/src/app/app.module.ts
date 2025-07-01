import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { LogradouroModule } from './logradouro/logradouro.module';
import { AngularModule } from './angular/angular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularModule,
    PessoaModule,
	LogradouroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

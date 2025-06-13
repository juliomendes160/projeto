import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { LogradouroComponent } from './logradouro/logradouro.component';

const routes: Routes = [
	{path:'', component: AngularComponent, pathMatch: 'full'},
	{path:'pessoa', component: PessoaComponent, pathMatch: 'prefix'},
	{path:'logradouro', component: LogradouroComponent, pathMatch: 'prefix'},
	{path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

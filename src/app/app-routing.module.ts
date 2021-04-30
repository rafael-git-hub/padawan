import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'form', component: FormComponent},
  {path: 'calculadora', component: CalculadoraComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(router)]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AuthModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    UserService
  ]
})
export class AuthModule { }

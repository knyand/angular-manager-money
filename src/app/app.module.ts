import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {SystemModule} from './system/system.module';
import {API_BASE_URL} from './shared/app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule
  ],
  providers: [
    {provide: API_BASE_URL, useValue: '//localhost:9090'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PwForgotComponent } from './auth/pw-forgot/pw-forgot.component';
import { PwResetComponent } from './auth/pw-reset/pw-reset.component';
import { WelcomeComponent } from './join/welcome/welcome.component';
import { HeaderComponent } from './join/header/header.component';
import { NavbarComponent } from './join/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PwForgotComponent,
    PwResetComponent,
    WelcomeComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

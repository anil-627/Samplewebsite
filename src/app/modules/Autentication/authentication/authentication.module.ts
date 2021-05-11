import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentcationRoutingModule } from './authenticaton-routing-module';
import { SignupComponent } from 'src/app/components/Auth/signup/signup.component';
import { LoginComponent } from 'src/app/components/Auth/login/login.component';
import { ForgetPasswordComponent } from 'src/app/components/Auth/forget-password/forget-password.component';
import { OtpVerficationComponent } from 'src/app/components/Auth/otp-verfication/otp-verfication.component';
import { NgOtpInputModule } from 'ng-otp-input';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    OtpVerficationComponent
  ],
  imports: [
    CommonModule,
    AuthentcationRoutingModule,
    NgOtpInputModule
  ]
})
export class AuthenticationModule { }

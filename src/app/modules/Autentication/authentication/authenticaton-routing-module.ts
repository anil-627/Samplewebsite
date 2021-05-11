
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from 'src/app/components/Auth/forget-password/forget-password.component';
import { LoginComponent } from 'src/app/components/Auth/login/login.component';
import { OtpVerficationComponent } from 'src/app/components/Auth/otp-verfication/otp-verfication.component';
import { SignupComponent } from 'src/app/components/Auth/signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'otp-verification', component: OtpVerficationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentcationRoutingModule { }

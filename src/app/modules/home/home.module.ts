import { SignupComponent } from './../../components/Auth/signup/signup.component';
import { LoginComponent } from './../../components/Auth/login/login.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { AppBodyComponent } from './../../components/app-body/app-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ServiceComponent } from 'src/app/components/service/service.component';


@NgModule({
  declarations: [
    AppBodyComponent,
    AboutComponent,
    ServiceComponent,
    LoginComponent,
    SignupComponent


  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

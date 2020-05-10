import { SignupComponent } from './../../components/Auth/signup/signup.component';
import { LoginComponent } from './../../components/Auth/login/login.component';
import { ServiceComponent } from './../../components/service/service.component';
import { AboutComponent } from './../../components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBodyComponent } from 'src/app/components/app-body/app-body.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-body'},
  { path: 'home-body', component: AppBodyComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

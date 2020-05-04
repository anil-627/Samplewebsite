import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBodyComponent } from 'src/app/components/app-body/app-body.component';


const routes: Routes = [
  { path: '', component: AppBodyComponent},
  { path: 'home-body', component: AppBodyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

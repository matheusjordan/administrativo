import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBoxComponent } from './login-box/login-box.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginBoxComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

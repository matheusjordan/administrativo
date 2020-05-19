import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginBoxComponent } from './login-box/login-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/login.service';


@NgModule({
  declarations: [
    LoginBoxComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }

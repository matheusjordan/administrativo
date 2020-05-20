import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../shared/login.service';
import { ERole } from '../../../shared/enum/role.enum';
import User from '../../user/shared/user.model';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  loginForm: FormGroup;
  submittingForm = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  login() {
    this.submittingForm = true;
    const formData = this.loginForm.value;
    this.loginService.doLogin().subscribe(
      (users) => {
        this.verifyUserData(users, formData);
        this.submittingForm = false;
      },
      error => this.toastrService.info('Falha no servidor!')
    )
  }

  // PRIVATE METHODS

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required]]
    });
  }

  private verifyUserData(users: User[], formData: any) {
    let userFound = false;

    users.forEach((user) => {
      if (user.username === formData.username && user.password === formData.password) {
        userFound = true;

        if (user.role !== ERole.ADMIN) {
          this.toastrService.warning('Área restrita a administradores');
        } else {
          this.actionsForSuccessLogin(user);
        }
      }
    })

    if (!userFound) {
      this.toastrService.warning('Nome do usuário ou senha inválidos')
    }
  }

  private actionsForSuccessLogin(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigateByUrl('/statistic');
    this.toastrService.success(`Bem vindo ${ user.name }`)
  }
}

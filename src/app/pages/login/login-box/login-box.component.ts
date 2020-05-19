import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';

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
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  login() {
    this.submittingForm = true;
    const formData = this.loginForm.value;
    this.loginService.doLogin(formData);
  }

  // PRIVATE METHODS

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required]]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import User from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  currentAction = '';
  isEdit = false;
  submittingForm = false;
  serverErrorMessages: any[];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildUserForm();

    if (this.isEdit) {
      this.loadUser();
    }
  }

  submit() {
    const user = this.userForm.value;

    if (this.isEdit) {
      this.editUser(user);
    } else {
      this.saveUser(user);
    }
  }

  // PRIVATE METHODS
  private setCurrentAction() {
    const url = this.router.url;
    this.isEdit = url.includes('edit');

    this.currentAction = this.isEdit ? 'Editar usuário' : 'Novo usuário';
  }

  private buildUserForm() {
    this.userForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required]]
    });
  }

  private saveUser(user: User) {
    this.submittingForm = true;
    this.userService.create(user).subscribe(
      () => {
        this.submittingForm = false;
        this.actionsForSucess();
      },
      error => {
        this.submittingForm = false;
        this.actionsForError(error);
      }
    );
  }

  private editUser(user: User) {
    this.submittingForm = true;
    this.userService.update(user).subscribe(
      () => {
        this.actionsForSucess();
      },
      error => {
        this.actionsForError(error);
      }
    );
  }

  private loadUser() {
    const userId = this.getIdFromUrl();

    this.userService.getById(userId).subscribe(
      user => {
        this.user = user;
        this.userForm.patchValue(user);
      },
      error => alert('Falha ao buscar usuário')
    );
  }

  private getIdFromUrl(): number {
    const url = this.router.url;
    const userId = +url.split('/')[2];

    return userId;
  }

  private actionsForSucess() {
    this.toastrService.success(`Usuário ${this.isEdit ? 'editado' : 'criado'} com sucesso!`);
    this.submittingForm = false;

    if (!this.isEdit) {
      this.userForm.reset();
    }
  }

  private actionsForError(error?: any) {
    this.toastrService.error(`Falha ao ${this.isEdit ? 'editar' : 'criar'} usuário!`);
    this.submittingForm = false;

    if (error) {
      this.serverErrorMessages = ['Falha ao processar requisição!'];
    }
  }

}

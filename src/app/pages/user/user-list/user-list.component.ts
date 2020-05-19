import { Component, OnInit } from '@angular/core';

import User from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  delete(user: User) {
    const mustDelete = confirm(`Deseja deletar o usuário: ${user.name}?`);

    if (mustDelete) {
      this.deleteUser(user.id);
    }
  }

  // PRIVATE METHODS

  private getUsers() {
    this.userService.getAll().subscribe(
      users => this.users = users,
      error => this.toastrService.error('Falha ao listar usuários')
    );
  }

  private deleteUser(id: number) {
    this.userService.delete(id).subscribe(
      () => {
        this.getUsers();
        this.toastrService.success('Usuário excluido com sucesso!');
      },
      error => this.toastrService.error('Falha ao deletar usuário')
    );
  }
}

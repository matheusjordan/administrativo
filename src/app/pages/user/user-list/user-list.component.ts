import { Component, OnInit } from '@angular/core';

import toastr from 'toastr';

import User from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService
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
      error => alert('Falha ao listar usuários')
    );
  }

  private deleteUser(id: number) {
    this.userService.delete(id).subscribe(
      () => {
        this.getUsers();
        toastr.success('Usuário excluido com sucesso!');
      },
      error => alert('Falha ao deletar usuário')
    );
  }
}

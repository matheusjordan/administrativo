import { Injectable } from '@angular/core';
import { UserService } from '../../user/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  doLogin({ username, password}) {
    this.userService.getAll().subscribe((users) => {
        users.forEach((user) => {
          if (user.name === username && user.pass === +password) {
            localStorage.setItem('user', JSON.stringify(user))
            this.router.navigateByUrl('/statistic');
            this.toastrService.success('Autenticado com sucesso!', `Bem vindo ${ user.name }`)
            return true;
          }
        }
      )

        return false;
      }
    )
  }
}

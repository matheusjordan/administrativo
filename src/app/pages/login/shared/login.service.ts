import { Injectable } from '@angular/core';
import { UserService } from '../../user/shared/user.service';

import { Observable } from 'rxjs';

import User from '../../user/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private userService: UserService,
  ) { }

  doLogin(): Observable<User[]> {
    return this.userService.getAll();
  }
}

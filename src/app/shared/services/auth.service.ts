import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  hasLoggedUser() {
    return localStorage.getItem('user') ? true : false;
  }
}

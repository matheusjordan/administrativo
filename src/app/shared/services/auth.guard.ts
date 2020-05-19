import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private toastrService: ToastrService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }

    this.toastrService.warning('necessário estar autenticado!', 'Faça o login');
    this.router.navigateByUrl('/login')
    return false;
  }

  async
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portifolio';
  loggedUser: any;

  constructor(
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.handleRouteEvents();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    this.toastrService.success('Volte novamente');
  }

  verifyLoggedUser() {
    this.loggedUser = localStorage.getItem('user');
  }

  // PRIVATE METHODS
  private handleRouteEvents() {
    this.router.events.subscribe(
      (res) => {
        this.verifyLoggedUser();
      }
    )
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModule } from './pages/user/user.module';
import { BeaconModule } from './pages/beacon/beacon.module';
import { LoginModule } from './pages/login/login.module';
import { StatisticModule } from './pages/statistic/statistic.module';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  { path: 'statistic', loadChildren: () => StatisticModule, canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => UserModule, canActivate: [AuthGuard] },
  { path: 'beacon', loadChildren: () => BeaconModule, canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => LoginModule },
  { path: '', redirectTo: 'login', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

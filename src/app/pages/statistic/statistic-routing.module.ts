import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticListComponent } from './statistic-list/statistic-list.component';

const routes: Routes = [
  { path: '', component: StatisticListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }

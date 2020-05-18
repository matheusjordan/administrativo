import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticListComponent } from './statistic-list/statistic-list.component';
import { StatisticService } from './shared/statistic.service';


@NgModule({
  declarations: [
    StatisticListComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ],
  providers: [
    StatisticService
  ]
})
export class StatisticModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortifolioRoutingModule } from './portifolio-routing.module';
import { PortifolioService } from './shared/portifolio.service';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ],
  providers: [
    PortifolioService
  ]
})
export class PortifolioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeaconRoutingModule } from './beacon-routing.module';
import { BeaconListComponent } from './beacon-list/beacon-list.component';
import { BeaconService } from './shared/beacon.service';
import { BeaconCreateComponent } from './beacon-create/beacon-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BeaconListComponent,
    BeaconCreateComponent
  ],
  imports: [
    CommonModule,
    BeaconRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    BeaconService
  ]
})
export class BeaconModule { }

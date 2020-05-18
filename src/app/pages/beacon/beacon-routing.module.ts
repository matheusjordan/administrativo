import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeaconListComponent } from './beacon-list/beacon-list.component';
import { BeaconCreateComponent } from './beacon-create/beacon-create.component';


const routes: Routes = [
  { path: '', component: BeaconListComponent },
  { path: 'new', component: BeaconCreateComponent },
  { path: ':id/edit', component: BeaconCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeaconRoutingModule { }

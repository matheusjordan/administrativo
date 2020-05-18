import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortifolioModule } from './pages/portifolio/portifolio.module';

const routes: Routes = [
  { path: 'portifolio', loadChildren: () => PortifolioModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathCountPage } from './death-count.page';

const routes: Routes = [
  {
    path: '',
    component: DeathCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathCountPageRoutingModule {}
